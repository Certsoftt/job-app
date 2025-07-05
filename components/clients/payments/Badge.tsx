"use client";
import React from "react";

export type PaymentsBadgeVariant = "pending confirmation" | "overdue" | "paid" | string;

interface PaymentsBadgeProps {
  children: React.ReactNode;
  variant: PaymentsBadgeVariant;
  className?: string;
}

const badgeStyles: Record<string, string> = {
  "pending confirmation": "bg-[#FFF3CD] text-[#FFB300] border border-[#FFB300]",
  overdue: "bg-[#FFF0F0] text-[#F75555] border border-[#F75555]",
  paid: "bg-[#E6FFF6] text-[#19C37D] border border-[#19C37D]",
};

const fallbackStyle = "bg-[#E2E8F0] text-[#232427] border border-[#A09CB6]";

const PaymentsBadge: React.FC<PaymentsBadgeProps> = ({ children, variant, className = "" }) => {
  const normalizedVariant = variant.toLowerCase();
  const badgeStyle = badgeStyles[normalizedVariant] || fallbackStyle;
  return (
    <span
      className={`font-poppins font-semibold text-sm rounded-md px-3 py-1 min-w-[100px] text-center inline-block capitalize ${badgeStyle} ${className}`}
      role="status"
      aria-label={typeof children === "string" ? children : undefined}
    >
      {children}
    </span>
  );
};

export default PaymentsBadge;
