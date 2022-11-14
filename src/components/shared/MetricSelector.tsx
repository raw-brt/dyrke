import { Metric } from "@generated/dyrketypes";
import {
  ArrowsRightLeftIcon,
  ChatBubbleLeftIcon,
  PencilSquareIcon,
  RectangleStackIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import type { Dispatch, FC, ReactNode, SetStateAction } from "react";

interface SelectorElement {
  icon: ReactNode;
  name: Metric;
}

interface Props {
  metric: Metric;
  setMetric: Dispatch<SetStateAction<Metric>>;
}

// Constants
const metrics: Array<SelectorElement> = [
  { icon: <UserGroupIcon className="w-5 h-5 mr-2" />, name: "Followers" },
  { icon: <PencilSquareIcon className="w-5 h-5 mr-2" />, name: "Publications" },
  { icon: <ChatBubbleLeftIcon className="w-5 h-5 mr-2" />, name: "Comments" },
  { icon: <ArrowsRightLeftIcon className="w-5 h-5 mr-2" />, name: "Mirrors" },
  { icon: <RectangleStackIcon className="w-5 h-5 mr-2" />, name: "Collects" },
];

export const MetricSelector: FC<Props> = ({ metric = "Followers", setMetric }) => {
  return (
    <div>
      <select
        id="metric"
        name="metric"
        value={metric}
        className="px-4 py-2 border border-gray-700 rounded-lg text-gray-400 bg-gray-800 focus:ring-2 focus:ring-inset focus:ring-primary-500 cursor-pointer"
        onChange={(event) => setMetric(event?.target?.value as Metric)}
      >
        {metrics.map((metric) => (
          <option key={metric.name} value={metric.name}>
            {metric.name}
          </option>
        ))}
      </select>
    </div>
  );
};
