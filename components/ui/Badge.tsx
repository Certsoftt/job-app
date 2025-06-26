"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

export type BadgeVariant = "approved" | "pending" | "progress" | "notstarted" | "upcoming" | "held" | "cancelled";

// const badgeStyles: Record<BadgeVariant, string> = ;

interface BadgeProps {
  children: React.ReactNode;
  variant: BadgeVariant;
}

const fallbackStyle = "bg-[#E2E8F0] text-[#232427] border border-[#A09CB6]";

const Badge: React.FC<BadgeProps> = ({ children, variant }) => {
  const pathname = usePathname();
  const [badgeStyles, setBadgeStyles] = useState({} as Record<BadgeVariant, string>)
  useEffect(()=>{
    if(pathname === "/meetings"){
      setBadgeStyles({
        upcoming: "bg-[#E6FFF6] text-[#19C37D] border border-[#19C37D]",
        held: "bg-[#F3F3F3] text-[#A09CB6] border border-[#A09CB6]",
        cancelled: "bg-[#FFF0F0] text-[#F75555] border border-[#F75555]",
        approved: "bg-[#C6F6D5] text-[#38A169] border border-[#38A169]",
        pending: "bg-[#E2E8F0] text-[#232427] border border-[#232427]",
        progress: "bg-[#FFF3CD] text-[#FFB300] border border-[#FFB300]",
        notstarted: "bg-[#E2E8F0] text-[#5a3ee6] border border-[#5a3ee6]",
      })
    }
    if(pathname === "/deliverables"){
      setBadgeStyles({
        upcoming: "bg-[#E6FFF6] text-[#19C37D] border border-[#19C37D]",
        held: "bg-[#F3F3F3] text-[#A09CB6] border border-[#A09CB6]",
        cancelled: "bg-[#FFF0F0] text-[#F75555] border border-[#F75555]",
        approved: "bg-[#C6F6D5] text-[#38A169] border border-[#38A169]",
        pending: "bg-[#E2E8F0] text-[#232427] border border-[#232427]",
        progress: "bg-[#FFF3CD] text-[#FFB300] border border-[#FFB300]",
        notstarted: "bg-[#E2E8F0] text-[#5a3ee6] border border-[#5a3ee6]",
      })
    }else{
      setBadgeStyles({
        upcoming: fallbackStyle,
        held: fallbackStyle,
        cancelled: fallbackStyle,
        approved: fallbackStyle,
        pending: fallbackStyle,
        progress: fallbackStyle,
        notstarted: fallbackStyle,
      })
    }
  }, [pathname])
  return(
    <span
      className={`font-poppins font-semibold text-sm rounded-md ${variant === "pending"?"badge_pending_1366":"px-2"} py-1 min-w-[120px] text-center inline-block capitalize ${badgeStyles[variant] || fallbackStyle}`}
      role="status"
      aria-label={children as string}
    >
      {children}
    </span>
  )
};

export default Badge;
