import { useGetWeeklyTimeLogQuery } from "@/services/dashboard/dashboard.service";
import LeaveAndAttendanceOverview from "../leaveAndAttendanceOverview/LeaveAndAttendanceOverview";
import { theme } from "@/theme";
import { formatDateToDayMonthYear, getPunchPairs } from "@/utils/functions";
import { Badge, Stack } from "@mantine/core";

function PrevDayTimeLog() {
  const { data: timeData } = useGetWeeklyTimeLogQuery({
    weekly: false,
    previous_week: true,
  });

  const lastDayTimeLog = timeData?.labels.last_day ?? 0;
  const thisWeekTimeLog = timeData?.labels.this_week ?? 0;
  const thisMonthTimeLog = timeData?.labels.this_month_average ?? 0;

  const tableRows = [...(timeData?.results ?? [])].reverse().map((item) => {
    const punchPairs = getPunchPairs(item.log ?? []);

    return [
      formatDateToDayMonthYear(item.log_date),
      <Stack align="center" gap={6}>
        {punchPairs.map((pair, index) => (
          <Badge key={index} variant="outline">
            {pair.in}
          </Badge>
        ))}
      </Stack>,
      <Stack align="center" gap={6}>
        {punchPairs.map((pair, index) => (
          <Badge key={index} variant="outline">
            {pair.out}
          </Badge>
        ))}
      </Stack>,
      <Badge variant="outline">{item.gamezone_duration}</Badge>,
      item.total_duration,
    ];
  });

  return (
    <LeaveAndAttendanceOverview
      title="Time Log - Prev Day"
      headline={lastDayTimeLog}
      headline_color={theme.other?.yellow ?? "#F08C00"}
      rows={[
        { label: "This Week", value: thisWeekTimeLog },
        { label: "This Month", value: thisMonthTimeLog },
      ]}
      iconSrc="7_prev_log_time.svg"
      modalContent={{
        title: "Time Logs",
        overview: [
          { label: "Last Day", value: lastDayTimeLog, color: "blue.6" },
          {
            label: "This Week",
            value: thisWeekTimeLog,
            color: "red.6",
          },
          {
            label: "Month Average",
            value: thisMonthTimeLog,
            color: "green.6",
          },
        ],
        tabledata: {
          headers: [
            "Log Date",
            "In Time",
            "Out Time",
            "Game Zone Time",
            "Total Duration",
          ],
          rows: tableRows,
        },
      }}
    />
  );
}

export default PrevDayTimeLog;

// {
//     "results": [
//         {
//             "id": 71533,
//             "log_date": "2026-05-12",
//             "total_duration": "08:20:00",
//             "employee_code": "INXSD490",
//             "employee_name": "Rohan Movaliya",
//             "log": [
//                 {
//                     "device": "MMI",
//                     "time": "09:40:57",
//                     "punch": "IN"
//                 },
//                 {
//                     "device": "MMO",
//                     "time": "18:00:57",
//                     "punch": "OUT"
//                 }
//             ],
//             "duration": [
//                 "08:20:00"
//             ],
//             "gamezone_duration": "00:00:00"
//         },
//         {
//             "id": 71632,
//             "log_date": "2026-05-13",
//             "total_duration": "08:15:05",
//             "employee_code": "INXSD490",
//             "employee_name": "Rohan Movaliya",
//             "log": [
//                 {
//                     "device": "MMI",
//                     "time": "09:50:22",
//                     "punch": "IN"
//                 },
//                 {
//                     "device": "MMO",
//                     "time": "15:03:59",
//                     "punch": "OUT"
//                 },
//                 {
//                     "device": "MMI",
//                     "time": "15:05:10",
//                     "punch": "IN"
//                 },
//                 {
//                     "device": "MMO",
//                     "time": "18:06:38",
//                     "punch": "OUT"
//                 }
//             ],
//             "duration": [
//                 "05:13:37",
//                 "03:01:28"
//             ],
//             "gamezone_duration": "00:00:00"
//         },
//         {
//             "id": 71731,
//             "log_date": "2026-05-14",
//             "total_duration": "08:02:59",
//             "employee_code": "INXSD490",
//             "employee_name": "Rohan Movaliya",
//             "log": [
//                 {
//                     "device": "MMI",
//                     "time": "09:59:27",
//                     "punch": "IN"
//                 },
//                 {
//                     "device": "MMO",
//                     "time": "18:02:26",
//                     "punch": "OUT"
//                 }
//             ],
//             "duration": [
//                 "08:02:59"
//             ],
//             "gamezone_duration": "00:00:00"
//         },
//         {
//             "id": 71817,
//             "log_date": "2026-05-15",
//             "total_duration": "08:10:03",
//             "employee_code": "INXSD490",
//             "employee_name": "Rohan Movaliya",
//             "log": [
//                 {
//                     "device": "MMI",
//                     "time": "09:53:32",
//                     "punch": "IN"
//                 },
//                 {
//                     "device": "MMO",
//                     "time": "18:03:35",
//                     "punch": "OUT"
//                 }
//             ],
//             "duration": [
//                 "08:10:03"
//             ],
//             "gamezone_duration": "00:00:00"
//         },
//         {
//             "id": 71946,
//             "log_date": "2026-05-18",
//             "total_duration": "08:47:42",
//             "employee_code": "INXSD490",
//             "employee_name": "Rohan Movaliya",
//             "log": [
//                 {
//                     "device": "MMI",
//                     "time": "10:18:33",
//                     "punch": "IN"
//                 },
//                 {
//                     "device": "MMO",
//                     "time": "18:00:50",
//                     "punch": "OUT"
//                 },
//                 {
//                     "device": "MMI",
//                     "time": "18:01:25",
//                     "punch": "IN"
//                 },
//                 {
//                     "device": "MMO",
//                     "time": "19:06:50",
//                     "punch": "OUT"
//                 }
//             ],
//             "duration": [
//                 "07:42:17",
//                 "01:05:25"
//             ],
//             "gamezone_duration": "00:00:00"
//         },
//         {
//             "id": 72033,
//             "log_date": "2026-05-19",
//             "total_duration": "08:00:58",
//             "employee_code": "INXSD490",
//             "employee_name": "Rohan Movaliya",
//             "log": [
//                 {
//                     "device": "MMI",
//                     "time": "10:19:17",
//                     "punch": "IN"
//                 },
//                 {
//                     "device": "MMO",
//                     "time": "18:20:15",
//                     "punch": "OUT"
//                 }
//             ],
//             "duration": [
//                 "08:00:58"
//             ],
//             "gamezone_duration": "00:00:00"
//         },
//         {
//             "id": 72115,
//             "log_date": "2026-05-20",
//             "total_duration": "08:59:36",
//             "employee_code": "INXSD490",
//             "employee_name": "Rohan Movaliya",
//             "log": [
//                 {
//                     "device": "MMI",
//                     "time": "10:08:39",
//                     "punch": "IN"
//                 },
//                 {
//                     "device": "MMO",
//                     "time": "19:08:15",
//                     "punch": "OUT"
//                 }
//             ],
//             "duration": [
//                 "08:59:36"
//             ],
//             "gamezone_duration": "00:00:00"
//         },
//         {
//             "id": 72194,
//             "log_date": "2026-05-21",
//             "total_duration": "09:02:37",
//             "employee_code": "INXSD490",
//             "employee_name": "Rohan Movaliya",
//             "log": [
//                 {
//                     "device": "MMI",
//                     "time": "09:59:18",
//                     "punch": "IN"
//                 },
//                 {
//                     "device": "MMO",
//                     "time": "19:01:55",
//                     "punch": "OUT"
//                 }
//             ],
//             "duration": [
//                 "09:02:37"
//             ],
//             "gamezone_duration": "00:00:00"
//         },
//         {
//             "id": 72285,
//             "log_date": "2026-05-22",
//             "total_duration": "08:01:51",
//             "employee_code": "INXSD490",
//             "employee_name": "Rohan Movaliya",
//             "log": [
//                 {
//                     "device": "MMI",
//                     "time": "09:58:53",
//                     "punch": "IN"
//                 },
//                 {
//                     "device": "MMO",
//                     "time": "16:17:46",
//                     "punch": "OUT"
//                 },
//                 {
//                     "device": "MMI",
//                     "time": "16:18:30",
//                     "punch": "IN"
//                 },
//                 {
//                     "device": "MMO",
//                     "time": "18:01:28",
//                     "punch": "OUT"
//                 }
//             ],
//             "duration": [
//                 "06:18:53",
//                 "01:42:58"
//             ],
//             "gamezone_duration": "00:00:00"
//         },
//         {
//             "id": 72372,
//             "log_date": "2026-05-25",
//             "total_duration": "08:00:58",
//             "employee_code": "INXSD490",
//             "employee_name": "Rohan Movaliya",
//             "log": [
//                 {
//                     "device": "MMI",
//                     "time": "09:59:20",
//                     "punch": "IN"
//                 },
//                 {
//                     "device": "MMO",
//                     "time": "13:26:34",
//                     "punch": "OUT"
//                 },
//                 {
//                     "device": "MMI",
//                     "time": "13:27:18",
//                     "punch": "IN"
//                 },
//                 {
//                     "device": "MMO",
//                     "time": "17:22:25",
//                     "punch": "OUT"
//                 },
//                 {
//                     "device": "MMI",
//                     "time": "17:22:36",
//                     "punch": "IN"
//                 },
//                 {
//                     "device": "MMO",
//                     "time": "18:01:13",
//                     "punch": "OUT"
//                 }
//             ],
//             "duration": [
//                 "03:27:14",
//                 "03:55:07",
//                 "00:38:37"
//             ],
//             "gamezone_duration": "00:00:00"
//         }
//     ],
//     "labels": {
//         "last_day": "08h 00m 58s",
//         "this_week": "8h 0m 58s",
//         "this_month_average": "8h 17m 20s"
//     }
// }
