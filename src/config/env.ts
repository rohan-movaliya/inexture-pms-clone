export const env = {
  API_URL: import.meta.env["VITE_API_URL"],
};

export const API_URL = {
  AUTH: {
    REFRESH_TOKEN: "/refresh",
  },
  DASHBOARD: {
    WEEK_TIME_ENTRY: `${env?.API_URL}/dashboard/time-entry`,
    WEEK_WORK_LOG: `${env?.API_URL}/dashboard/work-entry`,
    DATE_WISE_WORK_LOG: `${env?.API_URL}/dashboard/datewise-work-entry`,
    DEFAULTER_STATUS: `${env?.API_URL}/dashboard/defaulter_count`,
    TEAM_STATISTICS: `${env?.API_URL}/dashboard/team-statistics`,
  },
};
