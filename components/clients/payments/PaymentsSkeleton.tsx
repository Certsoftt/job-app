import React from "react";

const PaymentsSkeleton: React.FC = () => (
  <div className="w-full animate-pulse">
    <div className="h-12 bg-gray-200 rounded mb-4 w-1/3" />
    <div className="overflow-x-auto rounded-lg shadow-md bg-transparent">
      <table className="min-w-full bg-transparent">
        <thead>
          <tr className="bg-[#E3DEFF]">
            {Array.from({ length: 7 }).map((_, i) => (
              <th key={i} className="px-6 py-4 rounded bg-gray-200" />
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 7 }).map((_, i) => (
            <tr key={i} className="h-16">
              {Array.from({ length: 7 }).map((_, j) => (
                <td key={j} className="px-6 py-4 rounded bg-gray-200" />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default PaymentsSkeleton;
