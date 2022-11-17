import { Metric, Period } from "@generated/dyrketypes";
import { getIntervalUnits } from "@lib/getIntervalUnits";

// Calcular unidades para el intervalo

// Meter en cada intervalo una propiedad con el contador

export const useGetChartData = (metric: Metric, period: Period, chartData: any) => {

  if (
    !chartData?.followers?.followersByInterval?.isSuccess || !chartData?.posts?.postsByInterval?.isSuccess
    ) return;

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

    console.log("cookedChartData", cookedChartData)

    const readyToRenderData = cookedChartData.map((element, index) => ({ periodUnit: index + 1, amount: element[0].length }))

    return readyToRenderData;

  };

  return formatChartData();
};