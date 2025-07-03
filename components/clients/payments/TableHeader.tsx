import React from "react";

const TableHeader: React.FC = () => (
  <thead>
    <tr className="bg-[#E3DEFF] text-[#5A3EE6] text-base font-bold font-poppins">
      <th className="px-6 py-4 rounded-tl-xl text-left">Invoice #</th>
      <th className="px-6 py-4 text-left">Amount</th>
      <th className="px-6 py-4 text-left">Project</th>
      <th className="px-6 py-4 text-left">Milestone</th>
      <th className="px-6 py-4 text-left">Status</th>
      <th className="px-6 py-4 text-left">Date</th>
      <th className="px-6 py-4 rounded-tr-xl text-right">Actions</th>
    </tr>
  </thead>
);

export default TableHeader;
