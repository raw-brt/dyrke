import clsx from "clsx";
import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { forwardRef } from "react";

interface Props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "success" | "warning" | "super" | "danger";
  outline?: boolean;
  light?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    className = "",
    size = "md",
    variant = "primary",
    outline,
    light,
    loading,
    icon,
    children,
    ...rest
  },
  ref,
) {
  return (
    <button
      ref={ref}
      className={clsx(
        {
          "bg-primary-500 hover:bg-primary-600 text-neutral-900 focus:ring-primary-400 focus:ring-offset-2":
            !outline && !light && variant === "primary",
          "bg-gray-500 hover:bg-gray-600 text-neutral-900 focus:ring-gray-400 focus:ring-offset-2":
            !outline && !light && variant === "secondary",
          "bg-success-500 hover:bg-success-400 border border-success-600 text-neutral-900 focus:ring-success-400 focus:ring-offset-2":
            !outline && !light && variant === "success",
          "bg-orange-500 hover:bg-orange-400 text-neutral-900 focus:ring-orange-400 focus:ring-offset-2":
            !outline && !light && variant === "warning",
          "bg-pink-500 hover:bg-pink-400 border border-pink-600 text-neutral-900 focus:ring-pink-400 focus:ring-offset-2":
            !outline && !light && variant === "super",
          "bg-red-500 hover:bg-red-400 text-neutral-900 focus:ring-red-400 focus:ring-offset-2":
            !outline && !light && variant === "danger",
          "text-primary hover:bg-primary-100 focus:ring-primary-400 focus:ring-offset-2":
            outline && !light && variant === "primary",
          "text-gray-500 hover:bg-gray-100 focus:ring-gray-400 focus:ring-offset-2":
            outline && !light && variant === "secondary",
          "text-green-500 hover:bg-green-100 focus:ring-green-400 focus:ring-offset-2":
            outline && !light && variant === "success",
          "text-orange-500 hover:bg-orange-100 focus:ring-orange-400 focus:ring-offset-2":
            outline && !light && variant === "warning",
          "text-pink-500 hover:bg-pink-100 focus:ring-pink-400 focus:ring-offset-2":
            outline && !light && variant === "super",
          "text-red-500 hover:bg-red-100 focus:ring-red-400 focus:ring-offset-2":
            outline && !light && variant === "danger",
          "border-none !shadow-none text-gray-500": light,
          "px-2 py-1": size === "sm",
          "px-3 py-1.5": size === "md",
          "px-4 py-2": size === "lg",
          "flex items-center space-x-1.5": icon && children,
        },
        "rounded-lg font-bold disabled:opacity-50 shadow-sm focus:ring-2 focus:ring-opacity-50 focus:ring-offset-1 outline-none",
        className,
      )}
      disabled={loading}
      type={rest.type}
      {...rest}
    >
      {icon}
      <div>{children}</div>
    </button>
  );
});
