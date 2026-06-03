export interface EmployeeAnniversaryUserDetails {
  id: number;
  joining_date: string;
  team: string;
  exp_year_val: number;
}

export interface EmployeeAnniversaryUser {
  id: number;
  first_name: string;
  last_name: string;
  image: string | null;
  userdetails: EmployeeAnniversaryUserDetails;
  gender: "male" | "female" | string;
}

export interface EmployeeAnniversarySection {
  count: number;
  data: EmployeeAnniversaryUser[];
}

export interface EmployeeAnniversaryResponse {
  today: EmployeeAnniversarySection;
  upcoming: EmployeeAnniversarySection;
}
