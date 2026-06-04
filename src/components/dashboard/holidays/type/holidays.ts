export interface Holiday {
  id: number;
  name: string;
  date: string;
  holiday_image: string;
}

export interface HolidayData {
  count: number;
  data: Holiday[];
}

export interface HolidayAPIResponse {
  today: HolidayData;
  upcoming: HolidayData;
}
