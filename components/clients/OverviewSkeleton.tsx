"use client";
import React from "react";

const OverviewSkeleton: React.FC = () => (
  <div className="animate-pulse p-8 bg-[#F8F6FF] rounded-lg border border-[#E3DEFF]">
    <div className="flex items-center gap-4 mb-8">
      <div className="w-16 h-16 rounded-full bg-gray-200" />
      <div className="flex-1">
        <div className="h-5 w-40 bg-gray-200 rounded mb-2" />
        <div className="h-4 w-24 bg-gray-200 rounded" />
      </div>
    </div>
    <div className="flex gap-8 mb-8">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-48 h-24 bg-gray-200 rounded-lg" />
      ))}
    </div>
    <div className="w-full h-24 bg-gray-200 rounded-lg" />
  </div>
);

export default OverviewSkeleton;
