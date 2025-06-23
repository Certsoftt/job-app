"use client";
import React from "react";
import Image from "next/image";
import { sidebarNavItems, sidebarNavItemsType } from "@/utils/mockData";
import { usePathname } from "next/navigation";

const SidebarNav: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav aria-label="Sidebar main navigation">
      <ul className="flex flex-col gap-1">
        {sidebarNavItems.map((item: sidebarNavItemsType) => {
          const isActive = item.label === "Deliverables" && pathname === "/deliverables";
          return (
            <li key={item.label} className={item.label === "Settings" ? "my-6 pt-2 pl-3 border-t border-grey-400" : "pl-3"}>
              <a
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-primary font-medium text-[15px] transition-colors ${isActive ? "bg-primary text-white hover:bg-primary-700 " : "hover:bg-primary-700 hover:text-white"}`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="flex items-center justify-center w-6 h-6" aria-hidden="true">
                  <Image src={item.icon} alt={item.label + ' icon'} width={24} height={24} className="w-6 h-6 object-contain" />
                </span>
                <span className="leading-tight">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default React.memo(SidebarNav);
