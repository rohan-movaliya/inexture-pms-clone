// ================ Common Mapping Function ================

export function formatDateToDayMonth(dateString: string): string {
  const parsed = new Date(dateString);

  return parsed.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });
}

export function formatDateToDayMonthYear(dateString: string): string {
  const parsed = new Date(dateString);

  return parsed.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
// ================ Common Mapping Function ================

// ================ Weekly Time Log Mapping Function ================
type WeeklyTimeLogApiResult = {
  log_date?: string;
  total_duration?: string;
  log?: {
    device?: string;
    time?: string;
    punch?: string;
  }[];
};

type WeeklyTimeLogApiPayload = {
  data?: {
    results?: WeeklyTimeLogApiResult[];
  };
  labels?: {
    last_day?: number;
    this_week?: string;
    this_month_average?: string;
  };
};

export function mapWeeklyTimeLog(payload: WeeklyTimeLogApiPayload | undefined) {
  const results = payload?.data?.results ?? [];

  const items = results.map((item) => {
    const rawDate = item.log_date ?? "";
    const parsed = new Date(rawDate);

    const day = parsed.toLocaleDateString("en-GB", {
      weekday: "short",
    });

    const logs = item.log ?? [];

    const formattedLog = {
      MMI: logs
        .filter((entry) => entry.device === "MMI")
        .map((entry) => entry.time ?? ""),

      MMO: logs
        .filter((entry) => entry.device === "MMO")
        .map((entry) => entry.time ?? ""),
    };

    return {
      log_date: rawDate,
      day,
      total_duration:
        item.total_duration === "00:00:00" ? "0" : (item.total_duration ?? "0"),
      log: formattedLog,
    };
  });

  return {
    items,
    labels: {
      last_day: payload?.labels?.last_day ?? 0,
      this_week: payload?.labels?.this_week ?? "0",
      this_month_average: payload?.labels?.this_month_average ?? "0",
    },
  };
}

// ================ Weekly Time Log Mapping Function ================

// ================ Weekly Work Log Mapping Function ================

type WeeklyWorkLogApiResult = {
  log_date?: string;
  workLog?: string;
  log_hours?: number;
  config?: {
    isInDanger?: boolean;
    isHoliday?: boolean;
    isWfh?: {
      full?: boolean;
      first_half?: boolean;
      second_half?: boolean;
    };
    leave?: {
      full?: boolean;
      first_half?: boolean;
      second_half?: boolean;
    };
    compensation?: {
      full?: boolean;
      first_half?: boolean;
      second_half?: boolean;
    };
  };
};

type WeeklyWorkLogApiPayload = {
  results?: {
    data?: WeeklyWorkLogApiResult[];
    total_worklog?: string;
  };
};

export function mapWeeklyWorkLog(payload: WeeklyWorkLogApiPayload | undefined) {
  const results = payload?.results?.data ?? [];

  const items = results.map((item) => {
    const rawDate = item.log_date ?? "";
    const parsed = new Date(rawDate);

    const day = parsed.toLocaleDateString("en-GB", {
      weekday: "short",
    });

    return {
      log_date: rawDate,
      day,
      workLog: item.workLog && item.workLog.trim() !== "" ? item.workLog : "0",
    };
  });

  return {
    items,
    labels: {
      total_worklog: payload?.results?.total_worklog ?? "0",
    },
  };
}
// ================ Weekly Work Log Mapping Function ================




// ================ Date-wise Work Log Mapping Function ================
type WorkLogApiItem = {
  task?: {
    project_code?: string;
    project_name?: string;
    task_name?: string;
  };
  log_hours?: string;
  work_description?: string;
};

type WorkLogApiPayload = {
  data?: WorkLogApiItem[];
  labels?: {
    total_hours?: string;
  };
};

type MappedDateWiseWorkLogItem = {
  project_code: string;
  project_name: string;
  task_name: string;
  log_hours: string;
  work_description: string;
};

type MappedDateWiseWorkLogPayload = {
  items: MappedDateWiseWorkLogItem[];
};

export function mapDateWiseWorkLog(
  payload: WorkLogApiPayload,
): MappedDateWiseWorkLogPayload {
  return {
    items:
      payload.data?.map((item) => ({
        project_code: item.task?.project_code ?? "",
        project_name: item.task?.project_name ?? "",
        task_name: item.task?.task_name ?? "",
        log_hours: item.log_hours ?? "",
        work_description: item.work_description ?? "",
      })) ?? [],
  };
}
// ================ Date-wise Work Log Mapping Function ================
