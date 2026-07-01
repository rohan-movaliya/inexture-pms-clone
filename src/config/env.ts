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
    LEAVES_TODAY: `${env?.API_URL}/dashboard/leave-today`,
    UPCOMING_LEAVES: `${env?.API_URL}/dashboard/upcoming-leave`,
    WORK_FROM_HOME_TODAY: `${env?.API_URL}/dashboard/work-from-home-today`,
    LEAVE_COMPENSATION: `${env?.API_URL}/dashboard/leave-compensation`,

    // Row-4
    WORK_ANNIVERSARY: `${env?.API_URL}/dashboard/work-anniversary`,
    TODAY_BIRTHDAY: `${env?.API_URL}/dashboard/todays-birthdays`,
    UPCOMING_BIRTHDAYS: `${env?.API_URL}/dashboard/upcoming-birthdays`,
    HOLIDAYS: `${env?.API_URL}/dashboard/holidays`,

    // Row-5
    BLOG_POSTS: `${env?.API_URL}/dashboard/blog-posts`,
    NEW_EMPLLOYEES: `${env?.API_URL}/dashboard/new-employees`,
  },

  RESOURCE_MANAGEMENT: {
    EMPLOYEES_DETAILS: `${env?.API_URL}/users`,
  },
};
