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
  user_official_details: UserOfficialDetails | null;
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

export interface UpcomingLeaveResponse {
  results: LeaveRequest[];
  labels: Labels;
}

