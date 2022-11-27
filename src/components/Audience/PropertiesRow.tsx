import clsx from "clsx";
import type { FC } from "react";

type HeaderElement = { text: string, className: string };

const tableHeaderElements: HeaderElement[] = [
  { text: "Handle", className: "w-48 max-w-[24]" },
  { text: "Profile", className: "w-auto max-w-[24]" },
  { text: "Publications", className: "w-auto max-w-[24]" },
  { text: "Followers", className: "w-auto max-w-[24]" },
  { text: "Following", className: "w-auto max-w-[24]" },
  { text: "Status", className: "w-auto max-w-[24]" }
];

export const PropertiesRow: FC = () => {

  return (
    <div className="hidden w-full lg:flex justify-start items-center">
      {
        tableHeaderElements.map((element, index) => (
          <p key={index} className={clsx("text-gray-100 font-semibold", element.className)}>{element.text}</p>
        ))
      }
    </div>
  );
};