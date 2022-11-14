import { Period } from "@generated/dyrketypes";
import { CalendarIcon } from "@heroicons/react/24/outline";
import type { Dispatch, FC, SetStateAction } from "react";

interface Props {
  period: Period;
  setPeriod: Dispatch<SetStateAction<Period>>;
}

const periods: Array<Period> = ["Year", "3 Months", "Month", "Week", "Today"];

export const PeriodSelector: FC<Props> = ({ period = "Month", setPeriod }) => {
  return (
    <div>
      <select
        id="period"
        name="period"
        value={period}
        className="px-4 py-2 border border-gray-700 rounded-lg text-gray-400 bg-gray-800 focus:ring-2 focus:ring-inset focus:ring-primary-500 cursor-pointer"
        onChange={(event) => setPeriod(event?.target?.value as Period)}
      >
        {periods.map((period) => (
          <option key={period} value={period}>
            {period}
          </option>
        ))}
      </select>
    </div>
  );
};
