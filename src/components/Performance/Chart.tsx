import { Metric, Period } from "@generated/dyrketypes";
import type { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Props {
  period: Period;
  metric: Metric;
  // dataSets: Array<Object>
}

const data = [
  {
    period: "Page A",
    pv: 2400,
  },
  {
    period: "Page B",
    pv: 1398,
  },
  {
    period: "Page C",
    pv: 9800,
  },
  {
    period: "Page D",
    pv: 3908,
  },
  {
    period: "Page E",
    pv: 4800,
  },
  {
    period: "Page F",
    pv: 3800,
  },
  {
    period: "Page G",
    pv: 4300,
  },
];

export const Chart: FC<Props> = ({ period, metric }) => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="70%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
          <XAxis dataKey="period" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip isAnimationActive={false} />
          <Line 
            type="monotone" 
            dataKey="pv" 
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
