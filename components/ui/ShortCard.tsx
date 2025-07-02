"use client";
import React from "react";
import Image from "next/image";

interface ShortCardProps {
  title: string;
  value: React.ReactNode;
  subtitle?: string;
  iconSrc: string;
  onClick?: () => void;
  highlight?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const ShortCard: React.FC<ShortCardProps> = ({
  title,
  value,
  subtitle,
  iconSrc,
  onClick,
  highlight = false,
  className = "",
  children,
}) => (
  <div
    className={`border border-l-8 border-l-[#5B2EDD] relative bg-white ${highlight ? "border-[ #5A3EE6]" : "border-[#C6B9F6]"} rounded-lg p-5 min-w-[220px] min-h-[120px] flex flex-col justify-between cursor-pointer transition-shadow hover:shadow-lg ${className}`}
    onClick={onClick}
    tabIndex={0}
    role={onClick ? "button" : undefined}
    aria-label={title}
  >
    <div className="flex items-center justify-between mb-2">
      <span>
          <span className="text-xs font-medium text-[#232323] opacity-80">{title}</span>
          {subtitle && <div className="text-xs text-[#A09CB6] font-normal">{subtitle}</div>}
      </span>
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#F3F0FF]">
          <Image src={iconSrc} alt={title + " icon"} width={20} height={20} />
      </span>
    </div>
    <div className="text-2xl font-bold text-[#232323] mb-1">{value}</div>
    {children}
  </div>
);

export default ShortCard;
