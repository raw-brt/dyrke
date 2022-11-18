import { Metric, Period } from "@generated/dyrketypes";
import { getIntervalUnits } from "@lib/getIntervalUnits";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";

// Apply localizeformat plugin to dayjs
dayjs.extend(localizedFormat);

const getReadableTimeUnit = (period: Period, timeUnit: { start: number, end: number }) => {
  if (period === "90 days" || period === "30 days" || period === "Week") {
    return dayjs.unix(timeUnit.start).format("L");
  } else if (period === "Today") {
    return dayjs.unix(timeUnit.start).format("LTS");
  } else {
    return;
  }
};

export const useGetChartData = (metric: Metric, period: Period, chartData: any) => {

  // If it's still loading, do nothing

  if (
    !chartData?.followers?.followersByInterval?.isSuccess || !chartData?.posts?.postsByInterval?.isSuccess
    ) return;

  // If there are more than one page, flat the arrays
  const follows = chartData?.followers?.follows.flat();
  const publications = chartData?.posts?.posts.flat();

  const formatChartData = () => {
    const units = getIntervalUnits(period);
    const cookedChartData = units.map((timeUnit) => (
      metric === "Followers"
        ? (
            [
              follows.filter((follow: { timestamp: number; }) => (
              follow.timestamp >= timeUnit.start && follow.timestamp <= timeUnit.end
              )),
              timeUnit
            ]
          )
        : metric === "Publications"
        ? publications.filter((publication: { timestamp: number; }) => publication.timestamp >= timeUnit.start && publication.timestamp <= timeUnit.end)
        : null
    ));

    const readyToRenderData = cookedChartData.map((element, index) => (
      { periodUnit: index + 1, amount: element[0].length, date: getReadableTimeUnit(period, element[1]) }
      ))

    return readyToRenderData;

  };

  return formatChartData();
};