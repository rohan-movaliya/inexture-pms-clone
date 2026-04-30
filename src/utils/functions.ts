// ================ Common Mapping Function ================
import type { WeeklyLogPunch } from "../types/weeklyTimeLog";

// 2026-04-30 -> 30 Apr
export function formatDateToDayMonth(dateString: string): string {
  const parsed = new Date(dateString);

  return parsed.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });
}

// 2026-04-30 -> 30/04/2026
export function formatDateToDayMonthYear(dateString: string): string {
  const parsed = new Date(dateString);

  return parsed.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

// 2026-04-30 -> Fir
export function formatDateToDayName(dateString: string): string {
  const parsed = new Date(dateString);

  return parsed.toLocaleDateString("en-GB", {
    weekday: "short",
  });
}
// ================ Common Mapping Function ================


type PunchPair = {
  in: string;
  out?: string;
};

export function getPunchPairs(logs: WeeklyLogPunch[]): PunchPair[] {
  const pairs: PunchPair[] = [];
  let currentIn: WeeklyLogPunch | null = null;

  for (const log of logs) {
    if (log.punch === "IN") {
      if (currentIn) {
        pairs.push({ in: currentIn.time });
      }
      currentIn = log;
    } else if (log.punch === "OUT" && currentIn) {
      pairs.push({
        in: currentIn.time,
        out: log.time,
      });
      currentIn = null;
    }
  }

  if (currentIn) {
    pairs.push({ in: currentIn.time });
  }

  return pairs;
}


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
