import React from "react";
import Image from "next/image";

const LogoutButton: React.FC = () => {
  return (
    <div className="flex items-center gap-4 px-4 py-4 border border-red-400 hover:bg-red-500 text-red-600 hover:text-white rounded-xl cursor-pointer group">
      <span>
        <Image
          src="/logout-1.svg"
          alt=""
          width={20}
          height={20}
          className="group-hover:hidden"
        />
        <Image
          src="/logout-1-hover.svg"
          alt=""
          width={20}
          height={20}
          className="hidden group-hover:block"
        />
      </span>
      <p className=" rounded font-medium">Logout</p>
    </div>
  );
};

export default React.memo(LogoutButton);
