import { Period } from "@generated/dyrketypes";
import dayjs  from "dayjs";
/**
 * @desc Returns a time interval in unix time to filter queries
 * @param period desired time interval selected in chart
 * @returns interval in unix format
 */

type TimeInterval = { start: number, end: number };

export const getPeriodInterval = (period: Period): TimeInterval => {
  if (period === "Year") {
    return {
      start: dayjs().subtract(1, "year").unix(),
      end: dayjs().unix(), 
    };
  } else if (period === "90 days") {
    return {
      start: dayjs().subtract(90, "day").unix(),
      end: dayjs().unix()
    };
  } else if (period === "30 days") {
    return {
      start: dayjs().subtract(30, "day").unix(),
      end: dayjs().unix()
    };
  } else if (period === "Week") {
    return {
      start: dayjs().subtract(7, "day").unix(),
      end: dayjs().unix()
    };
  } else {
    return {
      start: dayjs().subtract(1, "day").unix(),
      end: dayjs().unix()
    };
  }
};