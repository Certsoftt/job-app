import React from "react";
import Image from "next/image";
import { userProfile } from "@/utils/mockData";

const UserProfileCard: React.FC = () => {
  return (
    <div className="flex items-center gap-2 border border-[#553bd96d] px-2 py-3 rounded-xl">
      <Image src={userProfile.avatar} alt="" width={40} height={40} />
      <div className="">
        <h2 className="text-[#543CDA] font-semibold text-sm">
          {userProfile.name}
        </h2>
        <p className="font-light text-sm text-gray-500">
          {userProfile.role}
        </p>
      </div>
    </div>
  );
};

export default React.memo(UserProfileCard);
