/* eslint-disable prefer-const */
import { Period } from "@generated/dyrketypes";
import dayjs  from "dayjs";

/**
 * @desc Returns time units for a given interval
 * @param period desired time interval selected in chart
 * @returns unit intervals and duration per interval
 */

interface TimeInterval {
  start: number,
  end: number
}

// Constants
const WEEK_FROM_NOW = 7 * 24 * 60 * 60;
const DAY_FROM_NOW = 24 * 60 * 60;
const HOUR_IN_SECONDS = 60 * 60;

export const getIntervalUnits = (period: Period) => {
  let intervalUnits: TimeInterval[] = [];

  if (period === "Year") {

    // Get the day one year ago
    const dayOneYearAgo = dayjs().subtract(1, "year");

    // Get unix time for 00:00 of that day
    const startTime = dayjs(dayOneYearAgo).startOf("d");

    // Get unix time for 23:59 of today
    const endTime = dayjs().endOf("d");

    const startAndEnd = {
      start: startTime.unix(),
      end: endTime.unix()
    }

    // Build an array of objects with each time interval according to selected period
     do {
      if (intervalUnits.length === 0) {
        intervalUnits.push({
          start: startAndEnd.start,
          end: startAndEnd.start + WEEK_FROM_NOW
        });
      } else {
        intervalUnits.push({
          start: intervalUnits[intervalUnits.length - 1].end + 1,
          end: intervalUnits[intervalUnits.length - 1].end + WEEK_FROM_NOW
        });
      }
     } while (intervalUnits.length < 52);

     return intervalUnits;

  } else if (period === "90 days") {

    // Get the day 90 days from now
    const day90DaysAgo = dayjs().subtract(90, "day");

    // Get unix time for 00:00 of that day
    const startTime = dayjs(day90DaysAgo).startOf("d");

    // Get unix time for 23:59 of today
    const endTime = dayjs().endOf("d");

    const startAndEnd = {
      start: startTime.unix(),
      end: endTime.unix()
    }
    
    // Build an array of objects with each timeinterval according to selected period
     do {
      if (intervalUnits.length === 0) {
        intervalUnits.push({
          start: startAndEnd.start,
          end: startAndEnd.start + DAY_FROM_NOW
        });
      } else {
        intervalUnits.push({
          start: intervalUnits[intervalUnits.length - 1].end + 1,
          end: intervalUnits[intervalUnits.length - 1].end + DAY_FROM_NOW
        });
      }
     } while (intervalUnits.length < 90);

     return intervalUnits;

  } else if (period === "30 days") {

    // Get the day 30 days from now
    const dayOneYearAgo = dayjs().subtract(30, "day");

    // Get unix time for 00:00 of that day
    const startTime = dayjs(dayOneYearAgo).startOf("d");

    // Get unix time for 23:59 of today
    const endTime = dayjs().endOf("d");

    const startAndEnd = {
      start: startTime.unix(),
      end: endTime.unix()
    }
    
    // Build an array of objects with each timeinterval according to selected period
     do {
      if (intervalUnits.length === 0) {
        intervalUnits.push({
          start: startAndEnd.start,
          end: startAndEnd.start + WEEK_FROM_NOW
        });
      } else {
        intervalUnits.push({
          start: intervalUnits[intervalUnits.length - 1].end,
          end: intervalUnits[intervalUnits.length - 1].end + WEEK_FROM_NOW
        });
      }
     } while (intervalUnits.length < 30);

     return intervalUnits;    

  } else if (period === "Week") {

    // Get the day 7 days from now
    const dayOneYearAgo = dayjs().subtract(7, "day");

    // Get unix time for 00:00 of that day
    const startTime = dayjs(dayOneYearAgo).startOf("d");

    // Get unix time for 23:59 of today
    const endTime = dayjs().endOf("d");

    const startAndEnd = {
      start: startTime.unix(),
      end: endTime.unix()
    }
    
    // Build an array of objects with each timeinterval according to selected period
     do {
      if (intervalUnits.length === 0) {
        intervalUnits.push({
          start: startAndEnd.start,
          end: startAndEnd.start + DAY_FROM_NOW
        });
      } else {
        intervalUnits.push({
          start: intervalUnits[intervalUnits.length - 1].end,
          end: intervalUnits[intervalUnits.length - 1].end + DAY_FROM_NOW
        });
      }
     } while (intervalUnits.length < 7);

     return intervalUnits;

  } else {

    // Calculate one year from now
    const startAndEnd = { 
      start: dayjs().subtract(1, "day").unix(),
      end: dayjs().unix()
     }
    
    // Build an array of objects with each timeinterval according to selected period
     do {
      if (intervalUnits.length === 0) {
        intervalUnits.push({
          start: startAndEnd.start,
          end: startAndEnd.start + HOUR_IN_SECONDS
        });
      } else {
        intervalUnits.push({
          start: intervalUnits[intervalUnits.length - 1].end,
          end: intervalUnits[intervalUnits.length - 1].end + HOUR_IN_SECONDS
        });
      }
     } while (intervalUnits.length < 24);

     return intervalUnits;

  }
};