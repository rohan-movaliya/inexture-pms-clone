export type WeeklyLogDevice = "MMI" | "MMO";

export type WeeklyLogPunch = {
  device: WeeklyLogDevice;
  time: string;
  punch: "IN" | "OUT";
};

export type WeeklyLogItem = {
  id?: string | number;
  log_date: string;
  day?: string;
  total_duration: string;
  log?: WeeklyLogPunch[];
  duration?: string[];
  gamezone_duration?: string;
};



export type WeeklyTimeLogResponse = {
  results: WeeklyLogItem[];
  labels: {
    last_day: number;
    this_week: string;
    this_month_average: string;
  };
};

export type RawWeeklyTimeLogResponse = {
  data: {
    results: WeeklyLogItem[];
  };
  labels: {
    last_day: number;
    this_week: string;
    this_month_average: string;
  };
};
