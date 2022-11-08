import clsx from "clsx";
import type { FC } from "react"

interface Props {
  slug: string,
  prefix?: string,
  className?: string
}

export const Slug: FC<Props> = ({ slug, prefix, className = "" }) => {
  return (
    <span className="text-primary-500">
      {prefix}
      {slug}
    </span>
  );
};