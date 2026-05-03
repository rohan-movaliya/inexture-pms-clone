export const env = {
  API_URL: import.meta.env["VITE_API_URL"],
};

export const API_URL = {
  AUTH: {
    REFRESH_TOKEN: "auth/refresh",
  },
  DASHBOARD: {
    // Row-1
    WEEK_TIME_ENTRY: `${env?.API_URL}/dashboard/time-entry`,
    WEEK_WORK_LOG: `${env?.API_URL}/dashboard/work-entry`,
    DATE_WISE_WORK_LOG: `${env?.API_URL}/dashboard/datewise-work-entry`,
   
    // Row-2
    DEFAULTER_STATUS: `${env?.API_URL}/dashboard/defaulter_count`,
    TEAM_STATISTICS: `${env?.API_URL}/dashboard/team-statistics`,
    
    // Row-3
    MY_LEAVES: `${env?.API_URL}/dashboard/my-leave`,
    LEAVES_TODAY: `${env?.API_URL}/dashboard/dashboard/leave-today`,
    UPCOMING_LEAVES: `${env?.API_URL}/dashboard/upcoming-leave`,
    WORK_FROM_HOME_TODAY: `${env?.API_URL}/dashboard/work-from-home-today`,
    LEAVE_COMPENSATION: `${env?.API_URL}/dashboard/leave-compensation`,
  },
};
