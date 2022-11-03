import clsx from "clsx";
import type { ElementType, FC, MouseEvent, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  forceRounded?: boolean;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
};

export const Card: FC<CardProps> = ({
  children,
  as: Tag = "div",
  className = "",
  onClick
}) => {
  return (
    <Tag
      className={className}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};