"use client";
import React from "react";

export type MeetingsBadgeVariant = "upcoming" | "held" | "cancelled" | string;

interface MeetingsBadgeProps {
  children: React.ReactNode;
  variant: MeetingsBadgeVariant;
  className?: string;
}

const meetingsBadgeStyles: Record<string, string> = {
  upcoming: "bg-[#E6FFF6] text-[#19C37D] border border-[#19C37D]",
  held: "bg-[#F3F3F3] text-[#A09CB6] border border-[#A09CB6]",
  cancelled: "bg-[#FFF0F0] text-[#F75555] border border-[#F75555]",
};

const fallbackStyle = "bg-[#E2E8F0] text-[#232427] border border-[#A09CB6]";

const MeetingsBadge: React.FC<MeetingsBadgeProps> = ({ children, variant, className = "" }) => {
  const normalizedVariant = variant.toLowerCase();
  const badgeStyle = meetingsBadgeStyles[normalizedVariant] || fallbackStyle;
  return (
    <span
      className={`font-poppins font-semibold text-sm rounded-md px-2 py-1 min-w-[120px] text-center inline-block capitalize ${badgeStyle} ${className}`}
      role="status"
      aria-label={typeof children === "string" ? children : undefined}
    >
      {children}
    </span>
  );
};

export default MeetingsBadge;
