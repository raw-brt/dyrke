import clsx from "clsx";
import type { FC } from "react";

interface Props {
  metricTitle: string;
  metricValue: number;
  metricDelta?: string;
  metricDeltaSign?: boolean;
  kpiTitle: string;
  kpiValue: number;
  kpiDelta?: string;
  kpiDeltaSign?: boolean;
}

export const MetricCard: FC<Props> = ({
  metricTitle,
  metricValue,
  metricDelta,
  metricDeltaSign,
  kpiTitle,
  kpiValue,
  kpiDelta,
  kpiDeltaSign,
}) => {
  return (
    <div className='w-64 h-48 bg-gray-800 rounded-xl'>
      <div className='w-full h-full p-5 flex flex-col justify-center items-center space-y-5'>
        <div className='w-full h-auto flex flex-col justify-start items-start'>
          <p className='w-full text-left text-gray-400 font-bold'>{metricTitle}</p>
          <div className='w-full flex justify-between items-center'>
            <p className='text-gray-100 font-bold text-3xl'>{metricValue}</p>
            {metricDelta && (
              <p
                className={clsx(
                  metricDeltaSign === true ? "text-primary-400" : "text-red-400",
                  "font-medium",
                )}
              >
                {metricDelta}
              </p>
            )}
          </div>
        </div>
        <hr className="w-16 border-gray-500" />
        <div className='w-full h-auto flex flex-col justify-start items-start'>
          <p className='w-full text-left text-gray-400 font-bold'>{kpiTitle}</p>
          <div className='w-full flex justify-between items-center'>
            <p className='text-gray-100 font-bold text-3xl'>{kpiValue}</p>
            {kpiDelta && (
              <p
                className={clsx(
                  kpiDeltaSign === true ? "text-primary-400" : "text-red-400",
                  "font-medium",
                )}
              >
                {kpiDelta}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
