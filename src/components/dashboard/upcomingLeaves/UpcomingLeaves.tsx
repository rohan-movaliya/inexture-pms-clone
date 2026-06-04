import { theme } from "@/theme";
import LeaveAndAttendanceOverview from "../leaveAndAttendanceOverview/LeaveAndAttendanceOverview";
import { useGetUpcomingLeavesQuery } from "@/services/dashboard/dashboard.service";
import { Avatar } from "@mantine/core";

function UpcomingLeaves() {
  const { data: leaveData } = useGetUpcomingLeavesQuery();


  const totalLeave = leaveData?.labels.total ?? 0;
  const fullDayLeave = leaveData?.labels.full_day_count ?? 0;
  const halfDayLeave = leaveData?.labels.half_day_count ?? 0;

  const formatLeaveType = (type: string, halfDayStatus?: string | null) => {
    if (type === "half") {
      return halfDayStatus === "firsthalf"
        ? "Half - 1st Half"
        : "Half - 2nd Half";
    }

    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  const tableRows =
    leaveData?.results?.map((leave) => [
      <Avatar key={leave.request_from.id} color="initials">
        {leave.request_from.first_name.charAt(0).toUpperCase()}
      </Avatar>,

      `${leave.request_from.first_name} ${leave.request_from.last_name}`,
      leave.request_from.user_official_details?.team ?? "-",
      new Date(leave.start_date).toLocaleDateString("en-GB"),
      new Date(leave.end_date).toLocaleDateString("en-GB"),
      formatLeaveType(leave.type, leave.half_day_status),
      leave.duration,
    ]) ?? [];

  return (
    <LeaveAndAttendanceOverview
      title="Upcoming Leaves"
      headline={totalLeave}
      headline_color={theme.other?.pink ?? "#C2255C"}
      rows={[
        { label: "Full Day", value: fullDayLeave },
        { label: "Half Day", value: halfDayLeave },
      ]}
      iconSrc="/6_upcoming_leaves.svg"
      modalContent={{
        title: "My Leaves",
        overview: [
          { label: "Full Day", value: fullDayLeave, color: "blue.6" },
          {
            label: "Half Day",
            value: halfDayLeave,
            color: "red.6",
          },
          {
            label: "Total",
            value: totalLeave,
            color: "green.6",
          },
        ],
        tabledata: {
          headers: ["##", "Name", "Team", "From", "To", "Type", "Total"],
          rows: tableRows,
        },
      }}
    />
  );
}

export default UpcomingLeaves;
