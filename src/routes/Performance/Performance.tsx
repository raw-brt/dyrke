import { FC, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBuiltGraphSDK } from "../../.graphclient/index";
import { Metric, Period } from "@generated/dyrketypes";
import { Header } from "@components/Performance/Header";
import { useProfileStore } from "src/store/profiles";
import { Chart } from "@components/Performance/Chart";
import { getPeriodInterval } from "@components/Utils/Performance/getPeriodInterval";

const sdk = getBuiltGraphSDK();

export const Performance: FC = () => {
  const [metric, setMetric] = useState<Metric>("Followers");
  const [period, setPeriod] = useState<Period>("Month");

  const currentProfile = useProfileStore((state) => state.currentProfile);

  console.log(currentProfile)

  const result = useQuery(["TestQuery"], () => sdk.TestQuery(), { refetchOnWindowFocus: false });

  console.log(result)

  const testHelper = getPeriodInterval("Year");
  console.log(testHelper)

  return (
    <section className="w-auto h-full mx-10 my-8 flex flex-col justify-start items-start space-y-10">
      <Header 
        metric={metric}
        setMetric={setMetric}
        period={period}
        setPeriod={setPeriod}
        value={currentProfile?.stats.totalFollowers}
      />
      <Chart metric={metric} period={period} />
    </section>
  );
};