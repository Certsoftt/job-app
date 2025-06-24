"use client";
import React, { useState, Suspense, useMemo } from "react";
import dynamic from "next/dynamic";
import { filterOptions, TableMockData } from "@/utils/mockData";
import DeliverablesTableSection from "@/components/deliverables/default";
import DeliverableDetail from "@/components/deliverables/detail";
import Image from "next/image";
import { TableRowData } from "../default/TableRow";

const EmptyState = dynamic(() => import("@/components/ui/EmptyState"), { ssr: false });
const FilterDropdown = dynamic(() => import("@/components/ui/FilterDropdown"), { ssr: false });

const getFilterOptions = (options: string[]) => options.filter(opt => !opt.toLowerCase().startsWith('all'));

const DeliverablesComponent: React.FC = () => {
  // Single select for each filter
  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  // Detail view state
  const [selectedRow, setSelectedRow] = useState<TableRowData | null>(null);

  // Filtering logic
  const filteredData = useMemo(() => {
    if (!client && !project && !status && !date) return TableMockData;
    return TableMockData.filter(row => {
      const clientMatch = !client || row.client.toLowerCase() === client.toLowerCase();
      const projectMatch = !project || row.project.toLowerCase() === project.toLowerCase();
      const statusMatch = !status || row.status.toLowerCase() === status.toLowerCase();
      const dateMatch = !date || row.dueDate.toLowerCase() === date.toLowerCase();
      return clientMatch && projectMatch && statusMatch && dateMatch;
    });
  }, [client, project, status, date]);

  // Handlers for opening/closing detail view
  const handleOpenDetail = (row: TableRowData) => setSelectedRow(row);
  const handleBack = () => setSelectedRow(null);
  // Remove row from filteredData and TableMockData on delete
  const handleDelete = () => {
    if (!selectedRow) return;
    // Remove from TableMockData (simulate, in real app use state or context)
    const idx = TableMockData.findIndex(
      r => r.deliverable === selectedRow.deliverable && r.project === selectedRow.project && r.client === selectedRow.client && r.dueDate === selectedRow.dueDate
    );
    if (idx !== -1) TableMockData.splice(idx, 1);
    setSelectedRow(null);
  };

  // Table section props
  const tableSectionProps = {
    data: filteredData,
    onDeliverableClick: handleOpenDetail,
    onViewAction: handleOpenDetail,
  };

  return (
    <>
      <section className="w-[96%] ml-[3.9%] mt-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 w-full">
          <div className="flex items-center gap-8 min-w-[400px]">
            <h1 id="deliverables-heading" className="text-[20px] md:text-[22px] font-extrabold text-primary tracking-tight leading-tight">Deliverables</h1>
            <button className="bg-[#5a3ee6] hover:bg-[#6d52e1] transition-colors text-white px-7 py-2.5 rounded-[8px] font-semibold text-[15px] shadow-none min-w-[180px] h-[40px] flex items-center justify-center" aria-label="Create new deliverable">New Deliverable</button>
          </div>
          {/* Only show filters if not in detail view */}
          {!selectedRow && (
            <div className="flex flex-wrap gap-4 mb-0 mt-2 md:mt-4 w-full w-full" aria-label="Filter deliverables">
              <FilterDropdown label="Client" options={getFilterOptions(filterOptions.client)} value={client} onChange={setClient} />
              <FilterDropdown label="Project" options={getFilterOptions(filterOptions.project)} value={project} onChange={setProject} />
              <FilterDropdown label="Status" options={getFilterOptions(filterOptions.status)} value={status} onChange={setStatus} />
              <FilterDropdown label="Date" options={getFilterOptions(filterOptions.date)} value={date} onChange={setDate} />
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px]">
          <Suspense fallback={<div>Loading...</div>}>
            {/* Conditional rendering: Table/EmptyState or Detail */}
            {!selectedRow ? (
              filteredData.length === 0 ? (
                <EmptyState
                  icon={
                    <>
                      <Image src="/tile_background.svg" alt="background tile" width={180} height={80} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
                      <Image src="/search_empty.svg" alt="search empty" width={90} height={90} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
                    </>
                  }
                  title="No Deliverable Match Your Search"
                />
              ) : (
                <DeliverablesTableSection {...tableSectionProps} />
              )
            ) : (
              <DeliverableDetail row={selectedRow as TableRowData} onBack={handleBack} onDelete={handleDelete} />
            )}
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default React.memo(DeliverablesComponent);
