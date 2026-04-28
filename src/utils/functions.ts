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