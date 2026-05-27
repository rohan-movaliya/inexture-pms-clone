import { useGetMyLeavesQuery } from "@/services/dashboard/dashboard.service";
import LeaveAndAttendanceOverview from "../leaveAndAttendanceOverview/LeaveAndAttendanceOverview";
import { theme } from "@/theme";

function MyLeaves() {
  const { data: leaveData } = useGetMyLeavesQuery();

  const allocatedLeave = leaveData?.labels?.allocated_leave ?? 0;
  const usedLeave =
    Number.parseFloat(leaveData?.labels?.used_leave ?? "0") || 0;
  const remainingLeave = leaveData?.labels?.remaining_leave ?? 0;

  const formatLeaveType = (type: string, halfDayStatus?: string | null) => {
    if (type === "half") {
      return halfDayStatus === "firsthalf"
        ? "Half - 1st Half"
        : "Half - 2nd Half";
    }

    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  const capitalize = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  const tableRows =
    leaveData?.results?.map((leave) => [
      new Date(leave.created_at).toLocaleDateString("en-GB"),
      new Date(leave.start_date).toLocaleDateString("en-GB"),
      new Date(leave.end_date).toLocaleDateString("en-GB"),
      leave.duration,
      formatLeaveType(leave.type, leave.half_day_status),
      capitalize(leave.status),
    ]) ?? [];

  return (
    <LeaveAndAttendanceOverview
      title="My Leaves"
      headline={allocatedLeave}
      headline_color={theme.other?.orange ?? "#E8590C"}
      rows={[
        { label: "Used leave", value: usedLeave },
        { label: "Remaining", value: remainingLeave },
      ]}
      iconSrc="/4_my_leaves.svg"
      modalContent={{
        title: "My Leaves",
        overview: [
          { label: "Total", value: allocatedLeave, color: "blue.6" },
          { label: "Used", value: usedLeave, color: "red.6" },
          { label: "Remaining", value: remainingLeave, color: "green.6" },
        ],
        tabledata: {
          headers: ["Requested On", "From", "To", "Days", "Type", "Status"],
          rows: tableRows,
        },
      }}
    />
  );
}

export default MyLeaves;
