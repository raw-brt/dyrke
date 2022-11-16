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

    // Get the day one year ago
    const dayOneYearAgo = dayjs().subtract(1, "year");

    // Get unix time for 00:00 of that day
    const startTime = dayjs(dayOneYearAgo).startOf("d");

    // Get unix time for 23:59 of today
    const endTime = dayjs().endOf("d");

    return {
      start: startTime.unix(),
      end: endTime.unix()
    };
  } else if (period === "90 days") {
    // Get the day 90 days ago
    const dayOneYearAgo = dayjs().subtract(90, "day");

    // Get unix time for 00:00 of that day
    const startTime = dayjs(dayOneYearAgo).startOf("d");

    // Get unix time for 23:59 of today
    const endTime = dayjs().endOf("d");

    return {
      start: startTime.unix(),
      end: endTime.unix()
    };
  } else if (period === "30 days") {
    // Get the day 30 days ago
    const dayOneYearAgo = dayjs().subtract(30, "day");

    // Get unix time for 00:00 of that day
    const startTime = dayjs(dayOneYearAgo).startOf("d");

    // Get unix time for 23:59 of today
    const endTime = dayjs().endOf("d");

    return {
      start: startTime.unix(),
      end: endTime.unix()
    };
  } else if (period === "Week") {
    // Get the day one week ago
    const dayOneYearAgo = dayjs().subtract(7, "day");

    // Get unix time for 00:00 of that day
    const startTime = dayjs(dayOneYearAgo).startOf("d");

    // Get unix time for 23:59 of today
    const endTime = dayjs().endOf("d");

    return {
      start: startTime.unix(),
      end: endTime.unix() 
    };
  } else {
    // Get the time 24 hours ago
    const dayOneYearAgo = dayjs().subtract(1, "day");

    // Get unix time for 00:00 of that day
    const startTime = dayjs(dayOneYearAgo).startOf("d");

    // Get unix time for 23:59 of today
    const endTime = dayjs().endOf("d");

    return {
      start: startTime.unix(),
      end: endTime.unix() 
    };
  }
};