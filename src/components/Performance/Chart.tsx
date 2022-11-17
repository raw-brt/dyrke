import { Metric, Period } from "@generated/dyrketypes";
import type { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  period: Period;
  metric: Metric;
  dataSet: { periodUnit: number; amount: any; }[] | undefined
}

export const Chart: FC<Props> = ({ period, metric, dataSet }) => {
  return (
    <div className="w-full h-[28rem]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={dataSet}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
          <XAxis dataKey="periodUnit" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip isAnimationActive={false} />
          <Line 
            type="monotone" 
            dataKey="amount" 
            stroke="#28D7A2" 
            strokeWidth={3}
            activeDot={{ r: 8 }}
            isAnimationActive={false} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
