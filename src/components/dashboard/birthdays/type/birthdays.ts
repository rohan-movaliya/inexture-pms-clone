export interface BirthdayOfficialDetails {
  code: string;
  designation: string;
  team: string;
  experience_year: number;
  experience_month: number;
}

export interface BirthdayEmployee {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  image: string | null;
  birth_date: string;
  gender: "male" | "female" | string;
  user_official_details: BirthdayOfficialDetails;
}

export interface TodayBirthDayAPIResponse {
  count: number;
  data: BirthdayEmployee[];
  message: string;
}
