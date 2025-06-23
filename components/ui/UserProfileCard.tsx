import React from "react";
import Image from "next/image";
import { userProfile } from "@/utils/mockData";

const UserProfileCard: React.FC = () => {
  return (
    <div className="flex items-center gap-3 bg-grey-400 rounded-lg p-3 mb-3 border border-grey-500" role="region" aria-label="User profile">
      <Image src={userProfile.avatar} alt={`Avatar of ${userProfile.name}`} width={48} height={48} className="w-12 h-12 rounded-full border-2 border-primary-900 object-cover" />
      <div>
        <div className="font-bold text-grey-900 text-base leading-tight">{userProfile.name}</div>
        <div className="text-xs text-grey-700 font-medium mt-1">{userProfile.role}</div>
      </div>
    </div>
  );
};

export default React.memo(UserProfileCard);
