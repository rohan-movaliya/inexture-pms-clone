import type { WeeklyLogItem, WeeklyTimeLogState } from "../components/WeeklyTimeLog";

type WeeklyTimeLogApiResult = {
  log_date?: string;
  total_duration?: string;
};

type WeeklyTimeLogApiPayload = {
  data?: {
    results?: WeeklyTimeLogApiResult[];
  };
  labels?: {
    this_week?: string;
  };
};

export function mapWeeklyTimeLog(payload: WeeklyTimeLogApiPayload | undefined): WeeklyTimeLogState {
  const results = payload?.data?.results ?? [];

  const items: WeeklyLogItem[] = results.map((item) => {
    const rawDate = item.log_date ?? "";

    const parsed = new Date(rawDate);

    const date = parsed.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    });

    let day = parsed.toLocaleDateString("en-GB", {
      weekday: "short",
    });

    let time = item.total_duration ?? "0";
    if (time === "00:00:00") {
      time = "0";
    }
    console.log(time)

    return {
      date,
      day,
      time,
    };
  });

  return {
    items,
    totalTime: payload?.labels?.this_week ?? "0",
  };
}
