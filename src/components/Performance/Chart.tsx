import { Metric, Period } from "@generated/dyrketypes";
import type { FC } from "react";
import { TooltipProps } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

const CustomTooltip: FC<TooltipProps<ValueType, NameType>> = ({ active, payload }) => {
  if (active) {
    const amount = payload && payload[0].payload.amount;
    const date = payload && payload[0].payload.date;

    return (
      <div className='py-2 px-4 bg-gray-800 border border-gray-700 rounded-lg'>
        <p className='text-gray-100'>
          <span className='font-bold text-primary-500'>{amount > 0 ? amount : "Nothing"}</span> on{" "}
          {date}
        </p>
      </div>
    );
  }

  return null;
};

interface Props {
  period: Period;
  metric: Metric;
  dataSet: { periodUnit: number; amount: any }[] | undefined;
}

export const Chart: FC<Props> = ({ period, metric, dataSet }) => {
  return (
    <div className='w-full h-[32rem]'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={dataSet}
          margin={{
            top: 5,
            right: 5,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' stroke='#374151' vertical={false} />
          <XAxis
            dataKey='periodUnit'
            stroke='#9CA3AF'
            interval={period === "90 days" ? 5 : period === "30 days" ? 2 : 0}
          />
          <YAxis stroke='#9CA3AF' />
          <Tooltip isAnimationActive={false} content={<CustomTooltip />} />
          <Line
            type='monotone'
            dataKey='amount'
            stroke='#28D7A2'
            strokeWidth={3}
            activeDot={{ r: 8 }}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
