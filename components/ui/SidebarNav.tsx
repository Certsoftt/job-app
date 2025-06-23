import React from "react";
import Image from "next/image";
import { sidebarNavItems, sidebarNavItemsType } from "@/utils/mockData";

const SidebarNav: React.FC = () => {
  return (
    <nav aria-label="Sidebar main navigation">
      <ul className="flex flex-col gap-1">
        {sidebarNavItems.map((item: sidebarNavItemsType) => (
          <li key={item.label} className={item.label === "Settings" ? "mt-6 pt-2 border-t border-grey-400" : ""}>
            <a
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-primary font-medium text-[15px] hover:bg-primary-400 hover:text-primary-900 transition-colors ${item.active ? "bg-primary-900 text-white" : ""}`}
              aria-current={item.active ? "page" : undefined}
            >
              <span className="flex items-center justify-center w-6 h-6" aria-hidden="true">
                <Image src={item.icon} alt={item.label + ' icon'} width={24} height={24} className="w-6 h-6 object-contain" />
              </span>
              <span className="leading-tight">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default React.memo(SidebarNav);
