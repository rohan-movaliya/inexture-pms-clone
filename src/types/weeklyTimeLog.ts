export type WeeklyLogDevice = "MMI" | "MMO";

export type WeeklyLogItem = {
  log_date: string;
  day: string;
  total_duration: string;
  log?: Partial<Record<WeeklyLogDevice, string[]>>;
};

export type WeeklyTimeLogState = {
  items: WeeklyLogItem[];
  labels: {
    last_day: number;
    this_week: string;
    this_month_average: string;
  };
};
