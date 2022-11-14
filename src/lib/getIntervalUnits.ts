/* eslint-disable prefer-const */
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

type Period = "Year" | "90 days" | "30 days" | "Week" | "Today";

// Constants
const WEEK_IN_SECONDS = 7 * 24 * 60 * 60;
const DAY_IN_SECONDS = 24 * 60 * 60;
const HOUR_IN_SECONDS = 60 * 60;

export const getIntervalUnits = (period: Period) => {
  let intervalUnits: TimeInterval[] = [];

  if (period === "Year") {

    // Calculate one year from now
    const startAndEnd = { 
      start: dayjs().unix(), 
      end: dayjs().subtract(1, "year").unix(),
     }
    
    // Build an array of objects with each timeinterval according to selected period
     do {
      if (intervalUnits.length === 0) {
        intervalUnits.push({
          start: startAndEnd.start,
          end: startAndEnd.start + WEEK_IN_SECONDS
        });
      } else {
        intervalUnits.push({
          start: intervalUnits[intervalUnits.length - 1].end + 1,
          end: intervalUnits[intervalUnits.length - 1].end + 1 + WEEK_IN_SECONDS
        });
      }
     } while (intervalUnits.length < 52);

     return intervalUnits;

  } else if (period === "90 days") {

    // Calculate one year from now
    const startAndEnd = { 
      start: dayjs().unix(), 
      end: dayjs().subtract(90, "day").unix(),
     }
    
    // Build an array of objects with each timeinterval according to selected period
     do {
      if (intervalUnits.length === 0) {
        intervalUnits.push({
          start: startAndEnd.start,
          end: startAndEnd.start + DAY_IN_SECONDS
        });
      } else {
        intervalUnits.push({
          start: intervalUnits[intervalUnits.length - 1].end + 1,
          end: intervalUnits[intervalUnits.length - 1].end + 1 + DAY_IN_SECONDS
        });
      }
     } while (intervalUnits.length < 90);

     return intervalUnits;

  } else if (period === "30 days") {

    // Calculate one year from now
    const startAndEnd = { 
      start: dayjs().unix(), 
      end: dayjs().subtract(30, "day").unix(),
     }
    
    // Build an array of objects with each timeinterval according to selected period
     do {
      if (intervalUnits.length === 0) {
        intervalUnits.push({
          start: startAndEnd.start,
          end: startAndEnd.start + WEEK_IN_SECONDS
        });
      } else {
        intervalUnits.push({
          start: intervalUnits[intervalUnits.length - 1].end + 1,
          end: intervalUnits[intervalUnits.length - 1].end + 1 + WEEK_IN_SECONDS
        });
      }
     } while (intervalUnits.length < 30);

     return intervalUnits;    

  } else if (period === "Week") {

    // Calculate one year from now
    const startAndEnd = { 
      start: dayjs().unix(), 
      end: dayjs().subtract(7, "day").unix(),
     }
    
    // Build an array of objects with each timeinterval according to selected period
     do {
      if (intervalUnits.length === 0) {
        intervalUnits.push({
          start: startAndEnd.start,
          end: startAndEnd.start + DAY_IN_SECONDS
        });
      } else {
        intervalUnits.push({
          start: intervalUnits[intervalUnits.length - 1].end + 1,
          end: intervalUnits[intervalUnits.length - 1].end + 1 + DAY_IN_SECONDS
        });
      }
     } while (intervalUnits.length < 7);

     return intervalUnits;

  } else {

    // Calculate one year from now
    const startAndEnd = { 
      start: dayjs().unix(), 
      end: dayjs().subtract(1, "day").unix(),
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
          start: intervalUnits[intervalUnits.length - 1].end + 1,
          end: intervalUnits[intervalUnits.length - 1].end + 1 + HOUR_IN_SECONDS
        });
      }
     } while (intervalUnits.length < 52);

     return intervalUnits;

  }
};