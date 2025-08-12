import React from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const ArrowButton = ({
  direction = "right", // "left" یا "right"
  variant = "default", // "default" یا "minimal"
  iconType = "arrow", // "arrow" یا "chevron"
  onClick,
  disabled = false,
}) => {
  const Icon =
    iconType === "chevron"
      ? direction === "left"
        ? ChevronLeft
        : ChevronRight
      : direction === "left"
        ? ArrowLeft
        : ArrowRight;

  const baseClasses =
    "group flex items-center justify-center rounded-full transition-all duration-300";

  const variantClasses =
    variant === "default"
      ? "w-20 h-20 bg-white border border-black hover:bg-black"
      : "p-2";

  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon
        size={variant === "default" ? 41 : 40}
        strokeWidth={2}
        className={`${
          variant === "default"
            ? "text-black group-hover:text-white group-hover:scale-110"
            : "text-gray-600"
        } transition-all duration-300`}
      />
    </button>
  );
};

export default ArrowButton;
