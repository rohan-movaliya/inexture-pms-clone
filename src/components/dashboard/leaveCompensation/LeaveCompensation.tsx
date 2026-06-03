import { useGetLeaveCompensationQuery } from "@/services/dashboard/dashboard.service";
import LeaveAndAttendanceOverview from "../leaveAndAttendanceOverview/LeaveAndAttendanceOverview";
import { theme } from "@/theme";

function LeaveCompensation() {
  const { data: compensationData } = useGetLeaveCompensationQuery();

  const allocatedCompensation = Number(
    compensationData?.labels?.total_allocated_compensation ?? 0,
  );
  const usedCompensation = Number(
    compensationData?.labels?.used_compensation ?? 0,
  );
  const remainingCompensation = Number(
    compensationData?.labels?.remaining_compensation ?? 0,
  );
  const pendingCompensation = Number(
    compensationData?.labels?.pending_compensation ?? 0,
  );
  const settledCompensation = Number(
    compensationData?.labels?.settled_compensation ?? 0,
  );

  return (
    <LeaveAndAttendanceOverview
      title="My Leave Compensation"
      headline={allocatedCompensation}
      headline_color={theme.other?.green ?? "#37B24D"}
      rows={[
        { label: "Used Compensation", value: usedCompensation },
        { label: "Remaining", value: remainingCompensation },
      ]}
      iconSrc="/8_time_compensation.png"
      modalContent={{
        title: "My Leave Compensation",
        overview: [
          { label: "Total", value: allocatedCompensation, color: "blue.6" },
          { label: "Used", value: usedCompensation, color: "red.6" },
          { label: "Pending", value: pendingCompensation, color: "green.6" },
          { label: "Settled", value: settledCompensation, color: "green.6" },
          {
            label: "Remaining",
            value: remainingCompensation,
            color: "green.6",
          },
        ],
        tabledata: {
          headers: ["Requested On", "From", "To", "Days", "Type", "Status"],
          rows: [],
        },
      }}
    />
  );
}

export default LeaveCompensation;
