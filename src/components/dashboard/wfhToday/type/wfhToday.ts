export interface WFHTodayAPIResponse {
  result: LeaveRequest[];
  labels: Labels;
}

export interface LeaveRequest {
  id: number;
  request_from: User;
  requested_by: number;
  request_to: number[];
  type: "full" | "half";
  half_day_status: "firsthalf" | "secondhalf" | null;
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
  status: "approved" | "rejected" | "pending";
  created_at: string;
  modified_at: string;
  deleted_at: string | null;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  image: string | null;
  gender: "male" | "female" | "other" | null;
  user_official_details: UserOfficialDetails;
}

export interface UserOfficialDetails {
  code: string;
  designation: string;
  team: string;
  experience_year: number;
  experience_month: number;
  total_experience_year: number;
  total_experience_month: number;
}

export interface Labels {
  full_day_count: number;
  total: number;
  half_day_count: number;
  full_day_leave_duration_count: number;
  half_day_leave_duration_count: number;
  total_employee: number;
}
