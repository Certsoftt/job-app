import React from "react";
import Image from "next/image";

const TopNav: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-white rounded-[24px] px-8 py-4 pr-8 shadow-sm w-full min-h-[72px] font-poppins" aria-label="Top navigation">
      <div className="flex items-center gap-8 w-full max-w-[600px]">
        <span className="font-bold text-[#5a3ee6] text-lg md:text-xl">Overview</span>
        <input
          type="text"
          placeholder="Search Clients, Projects.."
          aria-label="Search Clients, Projects"
          className="rounded-[12px] px-6 py-2 bg-[#edeafd] text-[#5a3ee6] placeholder-[#b7a9e7] border-none w-full max-w-[340px] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#5a3ee6]"
        />
      </div>
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 bg-white px-6 py-2 rounded-[8px] font-semibold text-[15px] shadow-none border-none min-w-[160px] h-[40px]" aria-label="Add new client">
          <span className="text-lg font-bold text-primary">+</span>
          <span className="text-[#5a3ee6] font-bold text-primary">New Client</span>
        </button>
        <span className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#edeafd] border border-[#b7a9e7]">
          <Image src="/icons/dark/notification.png" alt="notification icon" width={22} height={22} className="w-6 h-6 object-contain" />
        </span>
        <Image src="/images/Profile pic.png" alt="User avatar" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-primary-900 object-cover" />
      </div>
    </nav>
  );
};

export default React.memo(TopNav);
