import React from "react";

const columns = [
  { label: "Deliverable", width: "w-[260px]" },
  { label: "Project", width: "w-[180px]" },
  { label: "Client", width: "w-[180px]" },
  { label: "Assigned To", width: "w-[200px]" },
  { label: "Status", width: "w-[160px]" },
  { label: "Due Date", width: "w-[140px]" },
  { label: "Actions", width: "w-[120px]" },
];

export default function TableHeader() {
  return (
    <thead>
      <tr className="bg-[linear-gradient(0deg,_#E3DEFF_0%,_#E3DEFF_100%),_#E3DEFF] border border-[#C6B9F6] rounded-lg min-h-[56px]">
        {columns.map((col, idx) => (
          <th
            key={col.label}
            className={`px-4 py-3 ${col.width} text-[#5B2EDD] font-poppins font-semibold text-base leading-6 select-none text-center align-middle ${
              idx === columns.length - 1 ? "" : ""
            }`}
            style={{ whiteSpace: "nowrap" }}
          >
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
