import React from "react";

const TableSkeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="h-10 bg-gray-200 rounded mb-2 w-full" />
    {[...Array(8)].map((_, i) => (
      <div key={i} className="flex items-center space-x-4 mb-2">
        <div className="h-8 bg-gray-200 rounded w-1/6" />
        <div className="h-8 bg-gray-200 rounded w-1/6" />
        <div className="h-8 bg-gray-200 rounded w-1/6" />
        <div className="h-8 bg-gray-200 rounded w-1/6" />
        <div className="h-8 bg-gray-200 rounded w-1/6" />
        <div className="h-8 bg-gray-200 rounded w-1/6" />
      </div>
    ))}
  </div>
);

export default TableSkeleton;
