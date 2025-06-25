import React from "react";

export type BadgeVariant = "approved" | "pending" | "progress" | "notstarted";

const badgeStyles: Record<BadgeVariant, string> = {
  approved: "bg-[#C6F6D5] text-[#38A169] border border-[#38A169]",
  pending: "bg-[#E2E8F0] text-[#232427] border border-[#232427]",
  progress: "bg-[#FFF3CD] text-[#FFB300] border border-[#FFB300]",
  notstarted: "bg-[#E2E8F0] text-[#5a3ee6] border border-[#5a3ee6]",
};

interface BadgeProps {
  children: React.ReactNode;
  variant: BadgeVariant;
}

const Badge: React.FC<BadgeProps> = ({ children, variant }) => (
  <span
    className={`font-poppins font-semibold text-sm rounded-md ${variant === "pending"?"px-1 badge_pending_1366":"px-2"} py-1 min-w-[120px] text-center inline-block capitalize ${badgeStyles[variant]}`}
    role="status"
    aria-label={children as string}
  >
    {children}
  </span>
);

export default Badge;
