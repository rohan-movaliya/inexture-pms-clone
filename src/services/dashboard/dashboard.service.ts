import { API_URL } from "../../config/env";
import { apiService } from "../api.services";
import type {
  WeeklyTimeLogResponse,
  RawWeeklyTimeLogResponse,
} from "../../components/dashboard/weeklTimeLog/type/weeklyTimeLog";
import type {
  WeeklyWorkLogResponse,
  RawWeeklyWorkLogResponse,
} from "../../components/dashboard/weeklyWorkLog/type/weeklyWorkLog";
import type { DateWiseWorkLogApiResponse } from "../../components/dashboard/weeklyWorkLog/type/dateWiseWorkLog";
import {
  DefaulterStatus,
  DefaulterStatusApiResponse,
} from "@/components/dashboard/defaulterStatus/type/defaulterStatus";
import { TeamStatusData } from "@/components/dashboard/teamStatistics/type/teamStatisctics";
import type { LeaveResponse } from "@/components/dashboard/myLeaves/type/myleaves";
import { TodayLeaveResponse } from "@/components/dashboard/leaveToday/type/leavetoday";
import type { UpcomingLeaveResponse } from "@/components/dashboard/upcomingLeave/type/upcomingLeave";
import { WFHTodayAPIResponse } from "@/components/dashboard/wfhToday/wfhToday";
import { LeaveCompensationAPIResponse } from "@/components/dashboard/leaveCompensation/type/leaveCompensation";
import { WorkAnniversaryResponse, RawAnniversaryResponse, RawAnniversaryItem } from "@/components/dashboard/workAnniversary/type/workAnniversary";

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

    getWeeklyWorkLog: build.query<WeeklyWorkLogResponse, { count: number }>({
      query: ({ count }) => ({
        url: API_URL.DASHBOARD.WEEK_WORK_LOG,
        method: "GET",
        params: {
          count: count,
        },
      }),
      transformResponse: (response: RawWeeklyWorkLogResponse) => {
        return {
          results: response.results.data,
          summary: {
            total_worklog: response.results.total_worklog,
          },
        };
      },
    }),

    getDateWiseWorkLog: build.query<
      DateWiseWorkLogApiResponse,
      { date: string }
    >({
      query: ({ date }) => ({
        url: API_URL.DASHBOARD.DATE_WISE_WORK_LOG,
        method: "GET",
        params: {
          date: date,
        },
      }),
      transformResponse: (response: DateWiseWorkLogApiResponse) => {
        return {
          data: response.data,
        };
      },
    }),

    getDefaulterStatus: build.query<DefaulterStatus, void>({
      query: () => ({
        url: API_URL.DASHBOARD.DEFAULTER_STATUS,
        method: "GET",
      }),
      transformResponse: (
        response: DefaulterStatusApiResponse,
      ): DefaulterStatus => {
        return {
          data: response.category_wise_counts,
          total: response.total_defaulter_count,
        };
      },
    }),

    getTeamStatistics: build.query<TeamStatusData, void>({
      query: () => ({
        url: API_URL.DASHBOARD.TEAM_STATISTICS,
        method: "GET",
      }),
      transformResponse: (response: TeamStatusData): TeamStatusData => {
        return {
          data: response.data,
          overall: response.overall,
          total_employee: response.total_employee,
        };
      },
    }),

    getMyLeaves: build.query<LeaveResponse, void>({
      query: () => ({
        url: API_URL.DASHBOARD.MY_LEAVES,
        method: "GET",
      }),
      transformResponse: (response: LeaveResponse): LeaveResponse => {
        return {
          results: response.results,
          labels: response.labels,
        };
      },
    }),

    getLeaveToday: build.query<TodayLeaveResponse, void>({
      query: () => ({
        url: API_URL.DASHBOARD.LEAVES_TODAY,
        method: "GET",
      }),
      transformResponse: (response: TodayLeaveResponse): TodayLeaveResponse => {
        return {
          results: response.results,
          labels: response.labels,
        };
      },
    }),

    getUpcomingLeaves: build.query<UpcomingLeaveResponse, void>({
      query: () => ({
        url: API_URL.DASHBOARD.UPCOMING_LEAVES,
        method: "GET",
      }),
      transformResponse: (
        response: UpcomingLeaveResponse,
      ): UpcomingLeaveResponse => {
        return {
          results: response.results,
          labels: response.labels,
        };
      },
    }),

    getWFHToday: build.query<WFHTodayAPIResponse, void>({
      query: () => ({
        url: API_URL.DASHBOARD.WORK_FROM_HOME_TODAY,
        method: "GET",
      }),
      transformResponse: (
        response: WFHTodayAPIResponse,
      ): WFHTodayAPIResponse => {
        return {
          result: response.result,
          labels: response.labels,
        };
      },
    }),

    getLeaveCompensation: build.query<LeaveCompensationAPIResponse, void>({
      query: () => ({
        url: API_URL.DASHBOARD.LEAVE_COMPENSATION,
        method: "GET",
      }),
      transformResponse: (
        response: LeaveCompensationAPIResponse,
      ): LeaveCompensationAPIResponse => {
        return {
          results: response.results,
          labels: response.labels,
        };
      },
    }),

    getWorkAnniversary: build.query<WorkAnniversaryResponse, void>({
      query: () => ({
        url: API_URL.DASHBOARD.WORK_ANNIVERSARY,
        method: "GET",
      }),
      transformResponse: (
        response: RawAnniversaryResponse,
      ): WorkAnniversaryResponse => {
        const mapItem = (item: RawAnniversaryItem) => ({
          id: item.id,
          name: `${item.first_name} ${item.last_name}`,
          image: item.image,
          team: item.userdetails.team,
          experience: item.userdetails.exp_year_val,
          gender: item.gender,
        });

        return {
          today: response.today.data.map(mapItem),
          upcoming: response.upcoming.data.map(mapItem),
        };
      },
    }),
  }),
});

export const {
  useGetWeeklyTimeLogQuery,
  useGetWeeklyWorkLogQuery,
  useGetDateWiseWorkLogQuery,
  useGetDefaulterStatusQuery,
  useGetTeamStatisticsQuery,
  useGetMyLeavesQuery,
  useGetLeaveTodayQuery,
  useGetUpcomingLeavesQuery,
  useGetWFHTodayQuery,
  useGetLeaveCompensationQuery,
  useGetWorkAnniversaryQuery,
} = dashboardService;
