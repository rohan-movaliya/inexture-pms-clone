import { API_URL } from "../../config/env";
import { apiService } from "../api.services";

const dashboardService = apiService.injectEndpoints({
  endpoints: (build) => ({
    getWeeklyWorkLog: build.query({
      query: ({ weekly, previous_week }) => ({
        url: API_URL.DASHBOARD.WEEK_TIME_ENTRY,
        method: "GET",
        params: {
          weekly: weekly,
          previous_week: previous_week,
        },
      }),
    }),
  }),
});

export const { useGetWeeklyWorkLogQuery } = dashboardService;
