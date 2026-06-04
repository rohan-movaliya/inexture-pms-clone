import { useGetWFHTodayQuery } from "@/services/dashboard/dashboard.service";
import { Avatar } from "@mantine/core";
import LeaveAndAttendanceOverview from "../leaveAndAttendanceOverview/LeaveAndAttendanceOverview";
import { theme } from "@/theme";
import { LeaveRequest } from "./type/wfhToday";

function WFHToday() {
  const { data: wfhData } = useGetWFHTodayQuery();


  const totalWFH = wfhData?.labels.total ?? 0;
  const fullDayWFH = wfhData?.labels.full_day_count ?? 0;
  const halfDayWFH = wfhData?.labels.half_day_count ?? 0;

  const tableRows =
    wfhData?.result?.map((wfh: LeaveRequest) => [
      <Avatar key={wfh.request_from.id} color="initials">
        {wfh.request_from.first_name?.charAt(0).toUpperCase()}
      </Avatar>,

      `${wfh.request_from.first_name} ${wfh.request_from.last_name}`,
      wfh.request_from.user_official_details?.team ?? "-",
      new Date(wfh.start_date).toLocaleDateString("en-GB"),
      new Date(wfh.end_date).toLocaleDateString("en-GB"),
      wfh.duration,
    ]) ?? [];

  return (
    <LeaveAndAttendanceOverview
      title="WFH Today"
      headline={totalWFH}
      headline_color={theme.other?.blue ?? "#1971C2"}
      rows={[
        { label: "Full Day", value: fullDayWFH },
        { label: "Half Day", value: halfDayWFH },
      ]}
      iconSrc="/7_wfh_today.svg"
      modalContent={{
        title: "Employee on Work From Home Today",
        overview: [
          { label: "Full Day", value: fullDayWFH, color: "blue.6" },
          {
            label: "Half Day",
            value: halfDayWFH,
            color: "red.6",
          },
          {
            label: "Total",
            value: totalWFH,
            color: "green.6",
          },
        ],
        tabledata: {
          headers: ["##", "Name", "Team", "From", "To", "Total WFH"],
          rows: tableRows,
        },
      }}
    />
  );
}

export default WFHToday;
