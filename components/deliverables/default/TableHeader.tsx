import React from "react";

const columns = [
  "Deliverable",
  "Project",
  "Client",
  "Assigned To",
  "Status",
  "Due Date",
  "Actions",
];

export default function TableHeader() {
  return (
    <thead>
      <tr>
        <th colSpan={columns.length} className="p-0 border-none bg-transparent">
          <div className="flex items-center rounded-lg border border-[#C6B9F6] bg-[linear-gradient(0deg,_#E3DEFF_0%,_#E3DEFF_100%),_#E3DEFF] box-border px-3 py-2 w-full min-h-[56px]">
            {columns.map((col, /*idx*/) => (
              <span
                key={col}
                className={
                  [
                    "flex-1",
                    "text-[#5B2EDD]",
                    "font-poppins",
                    "font-semibold",
                    "text-base",
                    "leading-6",
                    // idx === columns.length - 1 ? "text-right" : "text-left",
                    "text-center",
                    "select-none",
                  ].join(" ")
                }
              >
                {col}
              </span>
            ))}
          </div>
        </th>
      </tr>
    </thead>
  );
}
