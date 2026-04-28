export type WeeklyWorkLogItem = {
  log_date: string;
  day: string;
  workLog: string;
};

export type WeeklyWorkLogState = {
  items: WeeklyWorkLogItem[];
  labels: {
    total_worklog: string;
  };
};

