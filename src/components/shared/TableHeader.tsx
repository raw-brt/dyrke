import clsx from "clsx";
import type { FC } from "react";

interface Props {
  columns: Array<string>,
  className?: string
}

export const TableHeader: FC<Props> = ({ columns, className = "" }) => {
  return (
    <thead className={clsx("bg-gray-800", className)}>
      <tr>
        {
          columns.map((column, index) => (
            <th 
              key={index} 
              scope="col" 
              className={clsx("py-3.5 text-left text-sm font-semibold text-gray-100", index === 0 ? "pl-8" : null)}>
              {column}
            </th>            
          ))
        }
      </tr>
    </thead>
  );
};
