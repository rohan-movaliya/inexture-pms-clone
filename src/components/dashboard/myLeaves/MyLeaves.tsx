import { useGetMyLeavesQuery } from "@/services/dashboard/dashboard.service";
import LeaveAndAttendanceOverview from "../leaveAndAttendanceOverview/LeaveAndAttendanceOverview";
import { theme } from "@/theme";

function MyLeaves() {
  // const { data: leaveData, isLoading, isError } = useGetMyLeavesQuery();
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

// {
//     "results": [
//         {
//             "id": 15325,
//             "request_from": {
//                 "id": 310,
//                 "first_name": "Rohan",
//                 "last_name": "Movaliya",
//                 "username": "rohan@inexture.com",
//                 "email": "rohan@inexture.com",
//                 "image": null,
//                 "gender": "male",
//                 "user_official_details": {
//                     "code": "INXSD490",
//                     "designation": "Junior AI/ML Developer",
//                     "team": "AI Team",
//                     "experience_year": 0,
//                     "experience_month": 11,
//                     "total_experience_year": 0,
//                     "total_experience_month": 11
//                 }
//             },
//             "requested_by": 310,
//             "request_to": [
//                 167,
//                 313,
//                 3,
//                 2,
//                 84,
//                 171,
//                 80
//             ],
//             "type": "half",
//             "half_day_status": "firsthalf",
//             "start_date": "2026-04-08",
//             "isadhoc_leave": false,
//             "adhoc_status": null,
//             "available_on_phone": true,
//             "available_on_city": true,
//             "emergency_contact": "+917698979159",
//             "end_date": "2026-04-08",
//             "approved_by": [
//                 80,
//                 171
//             ],
//             "rejected_by": [],
//             "is_active": true,
//             "return_date": "2026-04-08",
//             "duration": "0.5",
//             "status": "approved",
//             "created_at": "2026-04-06T16:36:10.433502Z",
//             "modified_at": "2026-04-08T11:36:24.006704Z",
//             "deleted_at": null
//         }
//     ],
//     "labels": {
//         "user_id": 310,
//         "allocated_leave": 17,
//         "used_leave": "0.50",
//         "remaining_leave": 16.5,
//         "is_active": true,
//         "remaining_compensation_leaves": "0.00",
//         "total_compensation_leaves": "0.00",
//         "exceed_leave": "0.00",
//         "loss_of_pay": "0.00"
//     }
// }
