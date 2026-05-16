import { useGetLeaveTodayQuery } from "@/services/dashboard/dashboard.service";
import LeaveAndAttendanceOverview from "../leaveAndAttendanceOverview/LeaveAndAttendanceOverview";
import { theme } from "@/theme";
import { Avatar } from "@mantine/core";

function LeaveToday() {
  const { data: leaveData } = useGetLeaveTodayQuery();

  console.log("Leave Data: ", leaveData);

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
      title="Leave Today"
      headline={totalLeave}
      headline_color={theme.other?.skyBlue ?? "#1098AD"}
      rows={[
        { label: "Full Day", value: fullDayLeave },
        { label: "Half Day", value: halfDayLeave },
      ]}
      iconSrc="/5_leave_today.svg"
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

export default LeaveToday;

// {
//     "results": [
//         {
//             "id": 14932,
//             "request_from": {
//                 "id": 235,
//                 "first_name": "Mansi",
//                 "last_name": "Thakrar",
//                 "username": "mansi@inexture.com",
//                 "email": "mansi@inexture.com",
//                 "image": null,
//                 "gender": "female",
//                 "user_official_details": {
//                     "code": "INXSD039",
//                     "designation": "Senior Consultant",
//                     "team": "Frontend Team",
//                     "experience_year": 2,
//                     "experience_month": 5,
//                     "total_experience_year": 10,
//                     "total_experience_month": 10
//                 }
//             },
//             "requested_by": 235,
//             "request_to": [
//                 16,
//                 3,
//                 313,
//                 2,
//                 84,
//                 15,
//                 213,
//                 8,
//                 80
//             ],
//             "type": "full",
//             "half_day_status": null,
//             "start_date": "2026-02-09",
//             "isadhoc_leave": true,
//             "adhoc_status": "directly",
//             "available_on_phone": true,
//             "available_on_city": true,
//             "emergency_contact": "+919033337978",
//             "end_date": "2026-08-07",
//             "approved_by": [
//                 8,
//                 80,
//                 84
//             ],
//             "rejected_by": [],
//             "is_active": true,
//             "return_date": "2026-08-10",
//             "duration": "180",
//             "status": "approved",
//             "created_at": "2026-02-04T10:17:27.363679Z",
//             "modified_at": "2026-02-24T06:11:18.155396Z",
//             "deleted_at": null
//         },
//         {
//             "id": 15485,
//             "request_from": {
//                 "id": 26,
//                 "first_name": "Unnati",
//                 "last_name": "Patel",
//                 "username": "unnati.inexture",
//                 "email": "unnati@inexture.com",
//                 "image": "https://inx-portal-media.s3.amazonaws.com/media/profiles/MicrosoftTeams-image_2.png",
//                 "gender": "female",
//                 "user_official_details": {
//                     "code": "INXUI165",
//                     "designation": "Consultant",
//                     "team": "Design Team",
//                     "experience_year": 6,
//                     "experience_month": 5,
//                     "total_experience_year": 6,
//                     "total_experience_month": 5
//                 }
//             },
//             "requested_by": 80,
//             "request_to": [
//                 3,
//                 313,
//                 2,
//                 80,
//                 26
//             ],
//             "type": "full",
//             "half_day_status": null,
//             "start_date": "2026-05-01",
//             "isadhoc_leave": false,
//             "adhoc_status": null,
//             "available_on_phone": true,
//             "available_on_city": true,
//             "emergency_contact": "",
//             "end_date": "2026-10-30",
//             "approved_by": [
//                 80
//             ],
//             "rejected_by": [],
//             "is_active": true,
//             "return_date": "2026-11-02",
//             "duration": "183",
//             "status": "approved",
//             "created_at": "2026-05-01T07:05:56.034832Z",
//             "modified_at": "2026-05-01T07:06:12.043613Z",
//             "deleted_at": null
//         },
//         {
//             "id": 15536,
//             "request_from": {
//                 "id": 273,
//                 "first_name": "Smit",
//                 "last_name": "Mevada",
//                 "username": "smitmevada@inexture.com",
//                 "email": "smitmevada@inexture.com",
//                 "image": null,
//                 "gender": "male",
//                 "user_official_details": {
//                     "code": "INXSD491",
//                     "designation": "Junior Python Developer",
//                     "team": "Python Team",
//                     "experience_year": 1,
//                     "experience_month": 7,
//                     "total_experience_year": 1,
//                     "total_experience_month": 7
//                 }
//             },
//             "requested_by": 273,
//             "request_to": [
//                 3,
//                 313,
//                 2,
//                 4,
//                 45,
//                 80
//             ],
//             "type": "full",
//             "half_day_status": null,
//             "start_date": "2026-05-07",
//             "isadhoc_leave": false,
//             "adhoc_status": null,
//             "available_on_phone": false,
//             "available_on_city": false,
//             "emergency_contact": "",
//             "end_date": "2026-05-29",
//             "approved_by": [
//                 4,
//                 80
//             ],
//             "rejected_by": [],
//             "is_active": true,
//             "return_date": "2026-06-01",
//             "duration": "17",
//             "status": "approved",
//             "created_at": "2026-05-07T07:18:04.432055Z",
//             "modified_at": "2026-05-07T12:07:20.230854Z",
//             "deleted_at": null
//         }
//     ],
//     "labels": {
//         "full_day_count": 3,
//         "total": 3,
//         "half_day_count": 0,
//         "full_day_leave_duration_count": 380,
//         "half_day_leave_duration_count": null,
//         "total_employee": 3
//     }
// }
