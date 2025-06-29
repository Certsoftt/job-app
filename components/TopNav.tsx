import React from "react";
import Image from "next/image";

const TopNav: React.FC = () => {
  return (
    <>
      <div className="nav-links bg-[#FFFFFF] flex rounded-[10px] ml-[3.5%] align-center justify-between w-[96.5%] h-16 shadow-[1px_1px_2px_rgba(0,0,0,0.1)]">
        <div className="flex gap-20 items-center ml-[36px]">
          <h1 className=" font-semibold text-[17px] text-black">Overview</h1>
          <div className="search my-[10px]">
            <input
              type="search"
              className="search-input py-3 bg-[#EAE8F7] rounded-[10px] w-[442px] px-[24px] text-[12px] text-[#543CDA] placeholder-[#543CDA80] outline-none"
              placeholder="Search Clients, Projects..."
            />
          </div>
        </div>
        <div className="flex items-center gap-10 mr-[67px]">
          <p className="font-semibold text-[16px] text-[#543CDA]">
            + New Client
          </p>
          <span>
            <Image
              src="/notification-alarm.svg"
              alt="Notification icon"
              width={24}
              height={24}
            />
          </span>
          <span>
            <Image
              src="/Profile-pic.svg"
              alt="User avatar"
              width={40}
              height={40}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default React.memo(TopNav);
