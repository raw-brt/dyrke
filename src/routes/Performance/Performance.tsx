import { FC, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBuiltGraphSDK } from "../../.graphclient/index";
import { Metric, Period } from "@generated/dyrketypes";
import { Header } from "@components/Performance/Header";
import { useProfileStore } from "src/store/profiles";
import { Chart } from "@components/Performance/Chart";
import { getIntervalUnits } from "@lib/getIntervalUnits";
import { MetricCard } from "@components/Performance/MetricCard";
import { getPeriodInterval } from "@lib/getPeriodInterval";

type PeriodInterval = { start: number, end: number }

const sdk = getBuiltGraphSDK();

export const Performance: FC = () => {
  const [metric, setMetric] = useState<Metric>("Followers");
  const [period, setPeriod] = useState<Period>("30 days");
  const userProfile = useProfileStore((state) => state.currentProfile);
  const userId = parseInt(userProfile?.id, 16).toString();
  const [lastUserId, setLastUserId] = useState("");
  const [periodInterval, setPeriodInterval] = useState<PeriodInterval>(getPeriodInterval(period));

  const [follows, setFollows] = useState<unknown[]>([]);

  console.log("follows array is: ", follows)

  const currentProfile = useProfileStore((state) => state.currentProfile);

  const followersByInterval = useQuery(
    ["GetFollowersInterval", userId, periodInterval, lastUserId],
    () => sdk.GetFollowersByInterval({ 
      id: userId, 
      gt: periodInterval?.start, 
      lt: periodInterval?.end, 
      lastID: lastUserId 
    }),
    { 
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      onSuccess: (data) => {
        if (data.follows.length === 1000) {
          setFollows([...follows as [any], data.follows]);
          setLastUserId(data.follows[999].id);
        } else {
          setFollows([...follows as [any], data.follows]);
          const flattened = follows.flat();
          console.log(flattened.length)
        }
      }
     },
  );

  console.log("Query is: ", followersByInterval?.data, periodInterval?.start, periodInterval?.end, lastUserId)

    useEffect(() => {
      setPeriodInterval(getPeriodInterval(period));
      setFollows([]);
      setLastUserId("");
    }, [period]);

  return (
    <>
      <Header
        metric={metric}
        setMetric={setMetric}
        period={period}
        setPeriod={setPeriod}
        value={currentProfile?.stats.totalFollowers}
      />
      <Chart metric={metric} period={period} />
      <div className='w-full h-auto flex flex-col justify-start items-start'>
        <h2 className='w-full text-left text-3xl font-bold text-gray-100 mt-10'>
          {period === "Today" ? "Today" : `Last ${period}`}
        </h2>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 my-10'>
          <MetricCard
            metricTitle='PUBLICATIONS'
            metricValue={356}
            kpiTitle='AVERAGE ENG.'
            kpiValue={0.57}
          />
        </div>
      </div>
    </>
  );
};
