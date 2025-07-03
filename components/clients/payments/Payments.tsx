"use client";
import React, { useState } from "react";
import TopClientCard from "@/components/ui/TopClientCard";
import Table from "./Table";
import Pagination from "@/components/ui/Pagination";
import PaymentsSkeleton from "./PaymentsSkeleton";
import { mockPaymentsData } from "./mockPaymentsData";
import FilterDropdown from "@/components/ui/FilterDropdown";
import BackButton from "@/components/ui/BackButton";
import { TableRowData } from "@/components/ui/TableRow";

const PAGE_SIZE_OPTIONS = [5, 7, 10];

const Payments: React.FC<{ selectedRow?: TableRowData; onBack: () => void }> = ({ selectedRow, onBack }) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);
  const [status, setStatus] = useState("");
  const [project, setProject] = useState("");

  // Filtering logic
  const filteredData = mockPaymentsData.filter(row => {
    const statusMatch = !status || row.status.toLowerCase().includes(status.toLowerCase());
    const projectMatch = !project || row.project.toLowerCase().includes(project.toLowerCase());
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    return statusMatch && projectMatch;
  });
  const total = Math.ceil(filteredData.length / pageSize);
  const paginated = filteredData.slice((page - 1) * pageSize, page * pageSize);

  // Determine client name robustly from selectedRow
  let displayClientName = selectedRow?.columnOne?.trim();
  if (!displayClientName) displayClientName = "Client Name Unavailable";

  return (
    <>
        <div className="w-full flex justify-start items-start mb-2">
            <BackButton onClick={onBack} />
        </div>
        <TopClientCard displayClientName={displayClientName} />
        <div className="w-full">
        <div className="flex justify-end mb-4 gap-4">
            <FilterDropdown label="Project" options={["All", ...Array.from(new Set(mockPaymentsData.map(d => d.project)))]} value={project} onChange={setProject} />
            <FilterDropdown label="Status" options={["All", ...Array.from(new Set(mockPaymentsData.map(d => d.status)))]} value={status} onChange={setStatus} />
            <select
            className="border border-[#E3DEFF] rounded px-3 py-2 text-sm font-poppins outline-none"
            value={pageSize}
            onChange={e => { setPageSize(Number(e.target.value)); setPage(1); }}
            >
            {PAGE_SIZE_OPTIONS.map(opt => (
                <option key={opt} value={opt}>{opt} / page</option>
            ))}
            </select>
        </div>
        {loading ? (
            <PaymentsSkeleton />
        ) : (
            <Table data={paginated} loading={loading} />
        )}
        <div className="flex justify-center mt-6">
            <Pagination current={page} total={total} onPageChange={setPage} />
        </div>
        </div>
    </>
  );
};

export default Payments;
