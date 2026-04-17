import { API_URL } from "../../config/env";
import { apiService } from "../api.services";

const dashboardService = apiService.injectEndpoints({
  endpoints: (build) => ({
    getWeeklyWorkLog: build.query({
      query: () => ({
        url: `${API_URL.DASHBOARD.WEEK_TIME_ENTRY}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetWeeklyWorkLogQuery } = dashboardService;
