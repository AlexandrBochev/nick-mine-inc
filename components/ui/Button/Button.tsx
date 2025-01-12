"use client";
import { JSX, } from "react";

interface ButtonProps {
  title?: string
  shape?: "button"
  className?: string;
  onClick?: () => void
  type?: "button" | "submit" | "reset" | undefined
  Icon?: () => JSX.Element
  disabled?: boolean
}

const Button = ({
  title,
  shape,
  className,
  onClick,
  type,
  Icon,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={`
        flex items-center justify-center gap-4 text-sm outline-none lg:text-base
        ${shape === "button" && "w-full bg-accent font-bold text-white text-xsm h-8.5 lg:text-md lg:h-11.5"}
        ${className}
        ${disabled ? "opacity-30 cursor-not-allowed" :" hover:opacity-80 active:opacity-100"}
        transition-all duration-200
      `}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {Icon && <Icon />}
      {title && title}
    </button>
  );
};

export { Button };
