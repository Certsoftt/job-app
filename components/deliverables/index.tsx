"use client";
import React, { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import FilterDropdown from "@/components/ui/FilterDropdown";
import { filterOptions } from "@/utils/mockData";
import Image from "next/image";

const EmptyState = dynamic(() => import("@/components/ui/EmptyState"), { ssr: false });

const DeliverablesComponent: React.FC = () => {
  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  return (
    <section className="w-[96%] ml-[3.9%] mt-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 w-full">
        <div className="flex items-center gap-8 min-w-[400px]">
          <h1 id="deliverables-heading" className="text-[20px] md:text-[22px] font-extrabold text-primary tracking-tight leading-tight">Deliverables</h1>
          <button className="bg-[#5a3ee6] hover:bg-[#6d52e1] transition-colors text-white px-7 py-2.5 rounded-[8px] font-semibold text-[15px] shadow-none min-w-[180px] h-[40px] flex items-center justify-center" aria-label="Create new deliverable">New Deliverable</button>
        </div>
        <div className="flex flex-wrap gap-4 mb-0 mt-2 md:mt-4 justify-end w-full max-w-[600px]" aria-label="Filter deliverables">
          <FilterDropdown label="Client" options={filterOptions.client} value={client} onChange={setClient} />
          <FilterDropdown label="Project" options={filterOptions.project} value={project} onChange={setProject} />
          <FilterDropdown label="Status" options={filterOptions.status} value={status} onChange={setStatus} />
          <FilterDropdown label="Date" options={filterOptions.date} value={date} onChange={setDate} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px]">
        <Suspense fallback={<div>Loading...</div>}>
          <EmptyState
            icon={
              <>
                <Image src="/tile_background.svg" alt="background tile" width={180} height={80} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
                <Image src="/search_empty.svg" alt="search empty" width={90} height={90} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
              </>
            }
            title="No Deliverable Match Your Search"
          />
        </Suspense>
      </div>
    </section>
  );
};

export default React.memo(DeliverablesComponent);
