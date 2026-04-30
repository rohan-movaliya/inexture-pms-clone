export type WeeklyTimeLogDevice = "MMI" | "MMO";

export type WeeklyTimeLogPunch = {
  device: WeeklyTimeLogDevice;
  time: string;
  punch: "IN" | "OUT";
};

export type WeeklyTimeLogItem = {
  id?: string | number;
  log_date: string;
  total_duration: string;
  log?: WeeklyTimeLogPunch[];
};



export type WeeklyTimeLogResponse = {
  results: WeeklyTimeLogItem[];
  labels: {
    last_day: number;
    this_week: string;
    this_month_average: string;
  };
};

export type RawWeeklyTimeLogResponse = {
  data: {
    results: WeeklyTimeLogItem[];
  };
  labels: {
    last_day: number;
    this_week: string;
    this_month_average: string;
  };
};
