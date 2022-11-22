import { PeriodSelector } from "@components/Shared/PeriodSelector";
import { MetricSelector } from "@components/Shared/MetricSelector";
import { Period } from "@generated/dyrketypes";
import clsx from "clsx";
import type { Dispatch, FC, SetStateAction } from "react";
import { useLocation } from "react-router-dom";

type Metric = "Followers" | "Publications" | "Comments" | "Mirrors" | "Collects" | "Likes";

interface Props {
  metric: Metric,
  setMetric: Dispatch<SetStateAction<Metric>>,
  setPeriod: Dispatch<SetStateAction<Period>>,
  value?: number,
  delta?: number,
  period?: Period,
  selectors?: boolean,
  contextualCounter?: boolean,
  contextualValue? : string
}

export const PerformanceHeader: FC<Props> = ({ 
  metric = "Followers",
  setMetric,
  period,
  setPeriod, 
  value = 0, 
  delta, 
  selectors = true,
  contextualCounter = false,
  contextualValue
}) => {

  return (
    <div className="w-full h-auto flex flex-col justify-start items-start space-y-4">
      {/* Metric */}
      <div className="w-full h-auto flex flex-col justify-start items-start space-y-2">
        <p className="font-medium text-xl text-gray-50 text-left">{metric}</p>
        {
          delta 
            ? (<p 
                className="font-bold text-xl text-gray-50 text-left"
                >
                  {value}{" "}<span className={clsx(delta > 0 ? "text-primary-500" : "text-red-500", "font-medium text-xl")}>{delta.toLocaleString()}</span>
                </p>
              )
            : <p className="font-bold text-3xl text-gray-50 text-left">{value.toLocaleString()}</p>
        }
        {
          contextualCounter 
            && (
              <p className="w-full h-auto text-left text-gray-400">{contextualValue}</p>
            )
        }
      </div>
      {/* Selectors */}
      {
        selectors && metric && period && (
          <div className="w-full h-auto flex justify-between items-center">
            <MetricSelector 
              metric={metric} 
              setMetric={setMetric} 
            />
            <PeriodSelector 
              period={period} 
              setPeriod={setPeriod} 
            />
          </div>
        )
      }
    </div>
  );
};