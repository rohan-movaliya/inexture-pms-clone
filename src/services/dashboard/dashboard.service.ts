import { API_URL } from "../../config/env";
import { apiService } from "../api.services";

const dashboardService = apiService.injectEndpoints({
  endpoints: (build) => ({
    getWeeklyTimeLog: build.query({
      query: ({ weekly, previous_week }) => ({
        url: API_URL.DASHBOARD.WEEK_TIME_ENTRY,
        method: "GET",
        params: {
          weekly: weekly,
          previous_week: previous_week,
        },
      }),
    }),
    getWeeklyWorkLog: build.query({
      query: ({ count }) => ({
        url: API_URL.DASHBOARD.WEEK_WORK_LOG,
        method: "GET",
        params: {
          count: count,
        },
      }),
    }),
    getDateWiseWorkLog: build.query({
      query: ({ date }) => ({
        url: API_URL.DASHBOARD.DATE_WISE_WORK_LOG,
        method: "GET",
        params: {
          date: date,
        },
      }),
    }),
  }),
});

export const { useGetWeeklyTimeLogQuery, useGetWeeklyWorkLogQuery, useGetDateWiseWorkLogQuery } = dashboardService;
