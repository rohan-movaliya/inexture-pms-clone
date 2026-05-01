export type DateWiseWorkLogApiTask = {
  project_code?: string;
  project_name?: string;
  task_name?: string;
};

export type DateWiseWorkLogApiItem = {
  task?: DateWiseWorkLogApiTask;
  log_hours?: string;
  work_description?: string;
};

export type DateWiseWorkLogApiResponse = {
  data?: DateWiseWorkLogApiItem[];
};
