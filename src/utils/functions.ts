// ================ Common Mapping Function ================

import type { WeeklyTimeLogPunch } from "../components/dashboard/weeklTimeLog/type/weeklyTimeLog";

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
export function getPunchPairs(logs: WeeklyTimeLogPunch[]): PunchPair[] {
  const pairs: PunchPair[] = [];
  let currentIn: WeeklyTimeLogPunch | null = null;

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

