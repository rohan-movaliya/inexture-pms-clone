import { EmployeesDetailsResponse } from "@/components/resourceManagement/type/resourceManagement";
import { API_URL } from "../../config/env";
import { publicApiService } from "../api.services";

const dashboardService = publicApiService.injectEndpoints({
  endpoints: (build) => ({
    getEmployeeDetails: build.query<
      EmployeesDetailsResponse,
      {
        limit: number;
        search: string;
        team: string;
        designation: string;
        project: string;
      }
    >({
      query: ({ limit, search, team, designation, project }) => ({
        url: API_URL.RESOURCE_MANAGEMENT.EMPLOYEES_DETAILS,
        method: "GET",
        params: { limit, search, team, designation, project },
      }),
      transformResponse: (response: EmployeesDetailsResponse) => {
        return {
          data: response.data,
          labels: response.labels,
        };
      },
    }),
  }),
});

export const { useGetEmployeeDetailsQuery } = dashboardService;
