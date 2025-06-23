import React from "react";
import Image from "next/image";
import SidebarNav from "./ui/SidebarNav";
import UserProfileCard from "@/components/ui/UserProfileCard";
import LogoutButton from "./ui/LogoutButton";

const Sidebar: React.FC = () => {
  return (
    <aside
      className="flex flex-col justify-between w-full h-full bg-white rounded-[24px] shadow-lg overflow-hidden font-inter"
      role="complementary"
      aria-label="Sidebar navigation"
    >
      {/* Logo Section */}
      <div className="w-full bg-[#18153A] flex items-center justify-center py-5 rounded-[24px]">
        <Image
          src="/images/logo_dashboard.png"
          alt="Nexoris Logo"
          width={120}
          height={40}
          className="object-contain w-[120px] min-h-[72px]"
          priority
        />
      </div>
      {/* Separation */}
      <div className="w-full h-[2px] bg-main border-none my-2"></div>
      {/* Nav Section */}
      <div className="flex-1 flex flex-col justify-between px-0 pt-2 pb-0">
        <div className="flex-1 pl-4 mb-6">
          <SidebarNav />
        </div>
        <div className="mt-auto pl-4 pb-4">
          <UserProfileCard />
          <LogoutButton />
        </div>
      </div>
    </aside>
  );
};

export default React.memo(Sidebar);
