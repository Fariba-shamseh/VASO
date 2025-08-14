import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Play,
} from "lucide-react";

// Mapping آیکن‌ها بر اساس type و direction
const ICON_MAP = {
  arrow: { left: ArrowLeft, right: ArrowRight },
  chevron: {
    left: ChevronLeft,
    right: ChevronRight,
    up: ChevronUp,
    down: ChevronDown,
  },
  chevronUD: { up: ChevronUp, down: ChevronDown },
  play: { left: Play, right: Play },
};

// Mapping سایز آیکن بر اساس variant
const ICON_SIZE = {
  default: 41,
  filled: 30,
  chevronUpDown: 30,
  minimal: 40,
};

// Mapping کلاس رنگ و hover
const ICON_COLOR = {
  default: "text-black group-hover:text-white group-hover:scale-110",
  filled: "text-black group-hover:text-accent",
  chevronUpDown: "text-black group-hover:text-accent",
  minimal: "text-gray-600",
};

// Mapping کلاس button بر اساس variant
const BUTTON_VARIANT = {
  default: "w-20 h-20 bg-white border border-black hover:bg-black",
  minimal: "p-2",
  filled: "relative cursor-pointer w-60 h-60",
  chevronUpDown: "relative cursor-pointer",
};

const ArrowButton = ({
  direction = "right", // "left" | "right" | "up" | "down"
  variant = "default", // "default" | "minimal" | "filled" | "chevronUpDown"
  iconType = "arrow", // "arrow" | "chevron" | "play"
  onClick,
  disabled = false,
  backgroundImage,
  className = "",
  ...restProps // data-* و سایر props
}) => {
  const Icon = ICON_MAP[iconType.toLowerCase()]?.[direction] || ArrowRight;
  const size = ICON_SIZE[variant] || 40;
  const colorClass = ICON_COLOR[variant] || "text-gray-600";
  const variantClass = BUTTON_VARIANT[variant] || "";

  return (
    <button
      className={`group flex items-center justify-center rounded-full transition-all duration-300 ${variantClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {variant === "filled" && backgroundImage && (
        <div
          className="absolute inset-0 rounded-full animate-spin animate-slow"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      <Icon
        size={size}
        strokeWidth={1}
        className={`transition-all duration-300 ${colorClass}`}
      />
    </button>
  );
};

export default ArrowButton;
