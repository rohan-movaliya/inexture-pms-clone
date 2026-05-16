export interface UserOfficialDetails {
  code: string;
  designation: string;
  team: string;
  experience_year: number;
  experience_month: number;
  total_experience_year: number;
  total_experience_month: number;
}

export interface RequestFrom {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  image: string | null;
  gender: string;
  user_official_details: UserOfficialDetails;
}

export interface LeaveRequest {
  id: number;
  request_from: RequestFrom;
  requested_by: number;
  request_to: number[];
  type: string;
  half_day_status: string | null;
  start_date: string;
  isadhoc_leave: boolean;
  adhoc_status: string | null;
  available_on_phone: boolean;
  available_on_city: boolean;
  emergency_contact: string;
  end_date: string;
  approved_by: number[];
  rejected_by: number[];
  is_active: boolean;
  return_date: string;
  duration: string;
  status: string;
  created_at: string;
  modified_at: string;
  deleted_at: string | null;
}

export interface Labels {
  full_day_count: number;
  total: number;
  half_day_count: number;
  full_day_leave_duration_count: number;
  half_day_leave_duration_count: number | null;
  total_employee: number;
}

export interface TodayLeaveResponse {
  results: LeaveRequest[];
  labels: Labels;
}

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
