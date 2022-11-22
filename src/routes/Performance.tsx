import { FC, useState } from "react";
import { Metric, Period } from "@generated/dyrketypes";
import { useProfileStore } from "src/store/profiles";
import { Chart } from "@components/Performance/Chart";
import { MetricCard } from "@components/Performance/MetricCard";
import { usePerformanceMetrics } from "src/hooks/usePerformanceMetrics";
import { useGetChartData } from "src/hooks/useGetChartData";
import { formatRates } from "@lib/formatRates";
import { getAvgEngagement } from "@lib/getAvgEngagement";
import { PerformanceHeader } from "@components/Performance/PerformanceHeader";

export const Performance: FC = () => {
  // Global state
  const userData = useProfileStore((state) => state);

  // Component state
  const [metric, setMetric] = useState<Metric>("Followers");
  const [period, setPeriod] = useState<Period>("30 days");

  // Get data
  const performanceMetrics = usePerformanceMetrics(period);

  // Metrics
  const postCounter = performanceMetrics?.posts?.posts?.flat().length;
  const followersCounter = performanceMetrics?.followers?.follows?.flat().length;
  const commentsCounter = performanceMetrics?.comments?.comments.flat().length;
  const mirrorsCounter = performanceMetrics?.mirrors?.mirrors.flat().length;

  // Get chart data
  const chartData = useGetChartData(metric, period, performanceMetrics);

  return (
    <>
      <PerformanceHeader
        metric={metric}
        setMetric={setMetric}
        period={period}
        setPeriod={setPeriod}
        value={
          metric === "Followers"
            ? followersCounter
            : metric === "Publications"
            ? postCounter
            : followersCounter
        }
      />
      <Chart metric={metric} period={period} dataSet={chartData} />
      <div className='w-full h-auto flex flex-col justify-start items-start'>
        <h2 className='w-full text-left text-3xl font-bold text-gray-100 mt-10'>
          {period === "Today" ? "Today" : `Last ${period}`}
        </h2>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 my-10'>
          <MetricCard
            metricTitle='NEW FOLLOWERS'
            metricValue={followersCounter.toLocaleString()}
            kpiTitle='TOTAL FOLLOWERS'
            kpiValue={userData.currentProfile?.stats.totalFollowers.toLocaleString() ?? ""}
            isLoading={false}
          />
          <MetricCard
            metricTitle='PUBLICATIONS'
            metricValue={postCounter.toLocaleString()}
            kpiTitle='AVERAGE ENG.'
            kpiValue={getAvgEngagement([
              formatRates(commentsCounter, postCounter),
              formatRates(mirrorsCounter, postCounter),
            ])}
            isLoading={false}
          />
          <MetricCard
            metricTitle='COMMENTS'
            metricValue={commentsCounter.toLocaleString()}
            kpiTitle='COMMENT RATE'
            kpiValue={formatRates(commentsCounter, postCounter).toLocaleString()}
            isLoading={false}
          />
          <MetricCard
            metricTitle='MIRRORS'
            metricValue={mirrorsCounter.toLocaleString()}
            kpiTitle='MIRROR RATE'
            kpiValue={formatRates(mirrorsCounter, postCounter).toLocaleString()}
            isLoading={false}
          />
        </div>
      </div>
    </>
  );
};
