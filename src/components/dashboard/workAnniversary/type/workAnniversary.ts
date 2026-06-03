export interface AnniversaryItem {
  id: number;
  name: string;
  image: string | null;
  team: string;
  experience: number;
  gender: string;
}

export interface WorkAnniversaryResponse {
  today: AnniversaryItem[];
  upcoming: AnniversaryItem[];
}

export interface RawAnniversaryItem {
  id: number;
  first_name: string;
  last_name: string;
  image: string | null;
  userdetails: {
    id: number;
    joining_date: string;
    team: string;
    exp_year_val: number;
  };
  gender: string;
}

export interface RawAnniversaryResponse {
  today: {
    count: number;
    data: RawAnniversaryItem[];
  };
  upcoming: {
    count: number;
    data: RawAnniversaryItem[];
  };
}
