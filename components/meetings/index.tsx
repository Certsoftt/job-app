"use client";
import React, { useState, Suspense, useMemo } from "react";
import dynamic from "next/dynamic";
// import { filterOptions, TableMockData } from "@/utils/mockTableAndFilterOptionsData";
import { useTableOrFilter } from "@/utils/mockTableAndFilterOptionsData";
import DeliverablesTableSection from "@/components/deliverables/default";
import DeliverableDetail from "@/components/deliverables/detail";
import Image from "next/image";
import { TableRowData } from "@/components/ui/TableRow";
import LeftButtonAndTextCard from "@/components/ui/LeftButtonAndTextCard";

const EmptyState = dynamic(() => import("@/components/ui/EmptyState"), { ssr: false });
const FilterDropdown = dynamic(() => import("@/components/ui/FilterDropdown"), { ssr: false });

const TableMockData = useTableOrFilter().tableMockData;
const {filterOptions} = useTableOrFilter();

const getFilterOptions = (options: string[]) => options.filter(opt => !opt.toLowerCase().startsWith('all'));

const MeetingComponent: React.FC = () => {
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
      const clientMatch = !client || row.columnTwo.toLowerCase() === client.toLowerCase();
      const projectMatch = !project || row.columnThree.toLowerCase() === project.toLowerCase();
      const statusMatch = !status || row.columnFive.toLowerCase() === status.toLowerCase();
      const dateMatch = !date || row.columnOne.toLowerCase() === date.toLowerCase();
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
      r => r.columnOne === selectedRow.columnOne && r.columnTwo === selectedRow.columnTwo && r.columnThree === selectedRow.columnThree && r.columnSix === selectedRow.columnSix
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
          {TableMockData.length !== 0 && (
            <LeftButtonAndTextCard h1="Meetings" button="Schedule Meeting"/>
          )}
          {/* Only show filters if not in detail view */}
          {(!selectedRow && TableMockData.length !== 0) && (
            <div className="flex flex-wrap gap-4 mb-0 mt-2 md:mt-4" aria-label="Filter deliverables">
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
              filteredData.length === 0 && TableMockData.length !== 0 ? (
                <EmptyState
                  icon={
                    <>
                      <Image src="/tile_background.svg" alt="background tile" width={180} height={80} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
                      <Image src="/search_empty.svg" alt="search empty" width={90} height={90} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
                    </>
                  }
                  title="No Meeting Matches Your Search"
                />
              ) : (
                TableMockData.length !== 0 && <DeliverablesTableSection {...tableSectionProps} />
              )
            ) : (
              TableMockData.length !== 0 && <DeliverableDetail row={selectedRow as TableRowData} onBack={handleBack} onDelete={handleDelete} />
            )}
            {/* If no deliverables, show empty state */
            TableMockData.length === 0 && (
              <EmptyState
                icon={
                  <>
                    <Image src="/meeting_empty_state.svg" alt="404 empty state" width={180} height={100}/>
                  </>
                }
                title="No meetings have been scheduled yet"
                button="New Meeting"
              />
            )}
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default React.memo(MeetingComponent);
