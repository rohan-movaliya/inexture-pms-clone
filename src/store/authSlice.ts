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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      const token = action.payload.trim();
      if (!token) return;
      state.access_token = token;
      state.isAuthenticated = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
