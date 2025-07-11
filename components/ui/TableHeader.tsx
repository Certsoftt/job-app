"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

type columnObject = {
  label: string;
  width: string;
}[]

export default function TableHeader() {
  const pathname = usePathname();
  const [columns, setColumns] = useState([] as columnObject)

  useEffect(()=>{
    if(pathname === "/deliverables"){
      setColumns([
        { label: "Deliverable", width: "w-[260px]" },
        { label: "Project", width: "w-[180px]" },
        { label: "Client", width: "w-[180px]" },
        { label: "Assigned To", width: "w-[200px]" },
        { label: "Status", width: "w-[160px]" },
        { label: "Due Date", width: "w-[140px]" },
        { label: "Actions", width: "w-[120px]" },
      ])
    }
    if(pathname === "/meetings"){
      setColumns([
        { label: "Date & Time", width: "w-[180px]" },
        { label: "Client", width: "w-[180px]" },
        { label: "Project", width: "w-[260px]" },
        { label: "Purpose", width: "w-[200px]" },
        { label: "Status", width: "w-[160px]" },
        { label: "Platform", width: "w-[140px]" },
        { label: "Actions", width: "w-[120px]" },
      ])
    }
    if(pathname === "/clients"){
      setColumns([
        { label: "Client Name", width: "w-[180px]" },
        { label: "# Of Projects", width: "w-[140px]" },
        { label: "Client Status", width: "w-[180px]" },
        { label: "Last Active", width: "w-[200px]" },
        { label: "Phone", width: "w-[160px]" },
        { label: "Email", width: "w-[260px]" },
        { label: "Actions", width: "w-[120px]" },
      ])
    }
  },[pathname])
  
  return (
    <thead>
      <tr className="shadow-[1px_1px_2px_rgba(0,0,0,0.1)] bg-[linear-gradient(0deg,_#E3DEFF_0%,_#E3DEFF_100%),_#E3DEFF] mb-4 border border-[#C6B9F6] rounded-lg min-h-[56px]">
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
