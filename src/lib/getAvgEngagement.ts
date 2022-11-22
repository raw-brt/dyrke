import { formatRates } from "./formatRates";

export const getAvgEngagement = (kpisCounters: Array<number>) => {
  const engagementMetric = kpisCounters.reduce((total, kpi) => total + kpi);
  return formatRates(engagementMetric, kpisCounters.length);
};