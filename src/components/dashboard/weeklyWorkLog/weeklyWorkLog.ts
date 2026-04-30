export type WeeklyWorkLogItem = {
  log_date: string;
  workLog: string;
};

export type WeeklyWorkLogResponse = {
  results: WeeklyWorkLogItem[];
  summary: {
    total_worklog: string;
  };
};

export type RawWeeklyWorkLogResponse = {
  results: {
    data: WeeklyWorkLogItem[];
    total_worklog: string;
  };
};
