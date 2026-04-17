export const env = {
  API_URL: import.meta.env["VITE_API_URL"],
};

export const API_URL = {
  AUTH: {
    // LOGIN: `${env?.API_URL}/auth/login`,
    // REGISTER: `${env?.API_URL}/auth/signup`,
    // LOGOUT: `${env?.API_URL}/auth/logout`,
    // RESET_PASSWORD: `${env?.API_URL}/auth/reset-password`,
    // CHANGE_PASSWORD: `${env?.API_URL}/auth/change-password`,
    // FORGOT_PASSWORD: `${env?.API_URL}/auth/forgot-password`,
    REFRESH_TOKEN: "/refresh",
  },
  DASHBOARD: {
    WEEK_TIME_ENTRY: `${env?.API_URL}/time-entry`,
  },
};
