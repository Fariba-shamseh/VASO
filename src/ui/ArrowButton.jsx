import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

//
// <ArrowButton
//

//   backgroundImage="images/text-pattern.png"
//   className="play-btn relative inline-block cursor-pointer"
//   data-bs-target="#myModal"
//   data-src="https://www.youtube.com/embed/W_tIumKa8VY"
// />

const ArrowButton = ({
  direction = "right", // "left" یا "right"
  variant = "default", // "default" | "minimal" | "filled"
  iconType = "arrow", // "arrow" | "chevron" | "play"
  onClick,
  disabled = false,
  backgroundImage,
  className = "",
  ...restProps // اینجا همه data-* و بقیه پراپ‌ها رو می‌گیریم
}) => {
  // مپینگ آیکن‌ها
  const iconMap = {
    arrow: {
      left: ArrowLeft,
      right: ArrowRight,
    },
    chevron: {
      left: ChevronLeft,
      right: ChevronRight,
    },
    play: {
      left: Play, // جهت بی‌اثر
      right: Play, // جهت بی‌اثر
    },
  };

  const Icon = iconMap[iconType.toLowerCase()]?.[direction] || ArrowRight;

  const baseClasses =
    "group flex items-center justify-center rounded-full transition-all duration-300";

  // کلاس‌های variant
  const variantClasses =
    variant === "default"
      ? "w-20 h-20 bg-white border border-black hover:bg-black"
      : variant === "minimal"
        ? "p-2"
        : variant === "filled"
          ? `relative cursor-pointer w-60 h-60`
          : "";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      // style={{
      //   backgroundImage: backgroundImage
      //     ? `url(${backgroundImage})`
      //     : undefined,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
      {...restProps} // اینجا هر چی data-* بدی به دکمه اضافه میشه
    >
      {/* Background چرخان فقط برای filled variant */}
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
        size={variant === "default" ? 41 : variant === "filled" ? 30 : 40}
        strokeWidth={2}
        className={`${
          variant === "default"
            ? "text-black group-hover:text-white group-hover:scale-110"
            : variant === "filled"
              ? "text-black group-hover:text-accent"
              : "text-gray-600"
        } transition-all duration-300`}
      />
    </button>
  );
};

export default ArrowButton;
