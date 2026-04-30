import { API_URL } from "../../config/env";
import { apiService } from "../api.services";
import type {
  WeeklyTimeLogResponse,
  RawWeeklyTimeLogResponse,
} from "../../types/weeklyTimeLog";

const dashboardService = apiService.injectEndpoints({
  endpoints: (build) => ({
    getWeeklyTimeLog: build.query<
      WeeklyTimeLogResponse,
      { weekly: boolean; previous_week: boolean }
    >({
      query: ({ weekly, previous_week }) => ({
        url: API_URL.DASHBOARD.WEEK_TIME_ENTRY,
        method: "GET",
        params: { weekly, previous_week },
      }),
      transformResponse: (response: RawWeeklyTimeLogResponse) => {
        return {
          results: response.data.results,
          labels: response.labels,
        };
      },
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

export const {
  useGetWeeklyTimeLogQuery,
  useGetWeeklyWorkLogQuery,
  useGetDateWiseWorkLogQuery,
} = dashboardService;
