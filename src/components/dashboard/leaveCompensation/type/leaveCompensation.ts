export interface LeaveCompensationAPIResponse {
  results: unknown[];
  labels: Labels;
}

interface Labels {
  user: number;
  total_allocated_compensation: string;
  allocated_year: string;
  used_compensation: string;
  pending_compensation: string;
  settled_compensation: string;
  remaining_compensation: string;
  compensation_allocations: unknown[];
  user_detail: UserDetail;
}

interface UserDetail {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  user_image: string | null;
  gender: string;
  email: string;
  image: string | null;
  role_name: string;
  user_official_details: UserOfficialDetails;
}

interface UserOfficialDetails {
  code: string;
  designation: string;
  team: string;
  experience_year: number;
  experience_month: number;
}
