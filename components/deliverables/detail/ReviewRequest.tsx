"use client";
import React from "react";

interface ReviewRequestItem {
  id: string;
  message: string;
  timestamp: string;
}

interface ReviewRequestProps {
  requests: ReviewRequestItem[];
}

const ReviewRequest: React.FC<ReviewRequestProps> = ({ requests }) => {
  return (
    <section className="w-[98%] bg-white rounded-xl border border-[#C6B9F6] border-l-4 border-l-[#5B2EDD] p-0 overflow-hidden">
      <ul className="max-h-[340px] overflow-y-auto divide-y divide-[#E3DEFF]">
        {requests.map((req) => (
          <li
            key={req.id}
            className="px-8 py-6 transition-colors duration-200 hover:bg-[#F7F5FF] cursor-pointer"
          >
            <div className="text-[#232323] text-base font-poppins font-normal mb-2">
              {req.message}
            </div>
            <div className="text-[#A09CB6] text-xs font-poppins font-normal mt-1">
              {req.timestamp}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export type { ReviewRequestItem };
export default ReviewRequest;
