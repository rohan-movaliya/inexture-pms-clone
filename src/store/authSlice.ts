import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UserRole = { role_id: number; name: string; description: string };

type AuthUser = {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  active_status: string;
  designation: string;
  is_verified: boolean;
  is_blocked: boolean;
  token_usage: number;
  created_at: string;
  updated_at: string;
  profile_pic: string | null;
  role: UserRole;
  permissions: unknown[];
};

export type AuthState = {
  isAuthenticated: boolean;
  user: AuthUser | null;
  access_token: string | null;
  refresh_token: string | null;
  token_type: string | null;
  expires_in: number | null;
  refresh_expires_in: number | null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  access_token: null,
  refresh_token: null,
  token_type: null,
  expires_in: null,
  refresh_expires_in: null,
};

export interface TokenPayload {
  access_token: string;
  refresh_token: string;
  token_type?: string;
  expires_in?: number;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<TokenPayload>) => {
      const { access_token, refresh_token, token_type, expires_in } =
        action.payload;

      if (!access_token || !refresh_token) return;

      state.access_token = access_token;
      state.refresh_token = refresh_token;
      state.token_type = token_type || "Bearer";
      state.expires_in = expires_in || null;
      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.access_token = null;
      state.refresh_token = null;
      state.token_type = null;
      state.expires_in = null;
      state.refresh_expires_in = null;
    },
  },
});

export const { setToken, logout } = authSlice.actions;


export default authSlice;
