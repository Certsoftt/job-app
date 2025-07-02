"use client";
import React from "react";

export type DeliverablesBadgeVariant = "approved" | "pending" | "progress" | "notstarted" | string;

interface DeliverablesBadgeProps {
  children: React.ReactNode;
  variant: DeliverablesBadgeVariant;
  className?: string;
}

const deliverablesBadgeStyles: Record<string, string> = {
  approved: "bg-[#C6F6D5] text-[#38A169] border border-[#38A169]",
  pending: "bg-[#E2E8F0] text-[#232427] border border-[#232427]",
  progress: "bg-[#FFF3CD] text-[#FFB300] border border-[#FFB300]",
  notstarted: "bg-[#E2E8F0] text-[#5a3ee6] border border-[#5a3ee6]",
};


const fallbackStyle = "bg-[#E2E8F0] text-[#232427] border border-[#A09CB6]";

const DeliverablesBadge: React.FC<DeliverablesBadgeProps> = ({ children, variant, className="" }) => {
  const normalizedVariant = variant.toLowerCase();
  const badgeStyle =  deliverablesBadgeStyles[normalizedVariant] || fallbackStyle;
  
  return(
    <span
      className={`font-poppins font-semibold text-sm rounded-md ${normalizedVariant === "pending"?"badge_pending_1366":"px-2"} py-1 min-w-[120px] text-center inline-block capitalize ${badgeStyle} ${className}`}
      role="status"
      aria-label={typeof children === "string" ? children : undefined}
    >
      {children}
    </span>
  )
};

export default DeliverablesBadge;
