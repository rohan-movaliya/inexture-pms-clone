import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type BaseQueryApi,
  type FetchArgs,
} from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
import { API_URL, env } from "../config/env";
import type { RootState } from "../store";
import type { TokenPayload } from "../store/authSlice";
import { logout, setToken } from "../store/authSlice";

type RefreshResponse =
  | TokenPayload
  | { data?: TokenPayload | { data?: TokenPayload } };

// ──────────────────────────────────────
// 🔹 Public (Non-Protected) API Service
// ──────────────────────────────────────~
export const publicApiService = createApi({
  reducerPath: "public",
  baseQuery: fetchBaseQuery({
    baseUrl: `${env.API_URL}`,
  }),
  refetchOnReconnect: true,
  endpoints: () => ({}),
});

// ───────────────────────────────
// 🔹 Base Queries
// ───────────────────────────────
export const baseQuery = fetchBaseQuery({
  baseUrl: `${env.API_URL}`,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.access_token;

    if (token) {
      const tokenType = state.auth.token_type ?? "Bearer";
      headers.set("Authorization", `${tokenType} ${token}`);
    }
    return headers;
  },
});

export const refreshBaseQuery = fetchBaseQuery({
  baseUrl: `${env.API_URL}`,
});

const mutex = new Mutex();

const normalizeTokenPayload = (
  payload: RefreshResponse,
): Partial<TokenPayload> | null => {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  if ("access_token" in payload || "refresh_token" in payload) {
    return payload as Partial<TokenPayload>;
  }

  const levelOne = payload.data;
  if (levelOne && typeof levelOne === "object") {
    if ("access_token" in levelOne || "refresh_token" in levelOne) {
      return levelOne as Partial<TokenPayload>;
    }

    if ("data" in levelOne && levelOne.data && typeof levelOne.data === "object") {
      return levelOne.data as Partial<TokenPayload>;
    }
  }

  return null;
};

// ───────────────────────────────
// 🔹 Helper Function
// ───────────────────────────────
export const executeBaseQuery = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: Record<string, unknown>,
) =>
  baseQuery(typeof args === "string" ? { url: args } : args, api, extraOptions);

// ───────────────────────────────
// 🔹 Refresh Token Logic
// ───────────────────────────────
export const refreshTokens = async (
  api: BaseQueryApi,
  extraOptions: Record<string, unknown>,
) => {
  const state = api.getState() as RootState;
  const refreshToken = state.auth.refresh_token;

  if (!refreshToken) {
    api.dispatch(logout());
    return null;
  }

  const refreshResult = await refreshBaseQuery(
    {
      url: API_URL.AUTH.REFRESH_TOKEN,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { refresh_token: refreshToken },
    },
    api,
    extraOptions,
  );

  if (!refreshResult || "error" in refreshResult) {
    api.dispatch(logout());
    return null;
  }

  const refreshData = refreshResult.data as RefreshResponse;
  const normalizedTokens = normalizeTokenPayload(refreshData);
  const accessToken = normalizedTokens?.access_token;

  if (!accessToken) {
    api.dispatch(logout());
    return null;
  }

  const newTokens: TokenPayload = {
    access_token: accessToken,
    refresh_token: normalizedTokens?.refresh_token ?? refreshToken,
    token_type: normalizedTokens?.token_type ?? state.auth.token_type ?? "Bearer",
    expires_in: normalizedTokens?.expires_in ?? undefined,
  };

  api.dispatch(setToken(newTokens));
  return newTokens;
};

// ───────────────────────────────
// 🔹 Token Refresh Wrapper
// ───────────────────────────────
export const baseQueryWithTokenRefresh: BaseQueryFn<
  string | FetchArgs,
  unknown,
  unknown
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();

  const result = await executeBaseQuery(args, api, extraOptions);

  // If not 401 → return immediately
  if (result?.error?.status !== 401) {
    return result;
  }

  // Handle token refresh
  if (mutex.isLocked()) {
    await mutex.waitForUnlock();
    return await executeBaseQuery(args, api, extraOptions);
  }

  const release = await mutex.acquire();

  try {
    const newTokens = await refreshTokens(api, extraOptions);

    if (newTokens) {
      return await executeBaseQuery(args, api, extraOptions);
    }
  } finally {
    release();
  }

  return result;
};

// ───────────────────────────────
// 🔹 Protected API Service
// ───────────────────────────────
export const apiService = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithTokenRefresh,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: [],
  endpoints: () => ({}),
});
