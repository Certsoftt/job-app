"use client";
import React, { useState, Suspense, useMemo } from "react";
import dynamic from "next/dynamic";
import { useTableOrFilter } from "@/utils/mockTableAndFilterOptionsData";
import BackButton from "@/components/ui/BackButton";
import { mockOverviewCardData } from "@/utils/mockOverviewCardData";
import DeliverablesTableSection from "@/components/deliverables/default";
import Image from "next/image";
import { TableRowData } from "@/components/ui/TableRow";
import LeftButtonAndTextCard from "@/components/ui/LeftButtonAndTextCard";

const EmptyState = dynamic(() => import("@/components/ui/EmptyState"), { ssr: false });
const Overview = dynamic(() => import("@/components/clients/overview/Overview"), { ssr: false });
const FilterDropdown = dynamic(() => import("@/components/ui/FilterDropdown"), { ssr: false });

const getFilterOptions = (options: string[]) => options.filter(opt => !opt.toLowerCase().startsWith('all'));

const ClientComponent: React.FC = () => {
  const { tableMockData: TableMockData, filterOptions } = useTableOrFilter();
  const [project, setProject] = useState("");
  const [status, setStatus] = useState("");
  const [selectedRow, setSelectedRow] = useState<TableRowData | null>(null);
  const [lastViewedClient, setLastViewedClient] = useState<TableRowData | null>(null);

  // Filtering logic
  const filteredData = useMemo(() => {
    if (!project && !status) return TableMockData;
    return TableMockData.filter(row => {
      const projectMatch = !project || row.columnThree.toLowerCase() === project.toLowerCase();
      const statusMatch = !status || row.columnFive.toLowerCase() === status.toLowerCase();
      return projectMatch && statusMatch;
    });
  }, [project, status, TableMockData]);

  // Handlers for opening/closing overview
  const handleOpenOverview = (row: TableRowData) => {
    setSelectedRow(row);
    setLastViewedClient(row);
    // Optionally: persist to localStorage/sessionStorage for reload restore
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("lastViewedClient", JSON.stringify(row));
      console.log(lastViewedClient);
    }
  };
  const handleBack = () => {
    setSelectedRow(null);
    // Optionally: clear from sessionStorage
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem("lastViewedClient");
    }
  };

  // Restore last viewed client on mount
  React.useEffect(() => {
    if (!selectedRow && typeof window !== "undefined") {
      const stored = window.sessionStorage.getItem("lastViewedClient");
      if (stored) {
        setSelectedRow(JSON.parse(stored));
      }
    }
  }, [selectedRow]);

  // Table section props
  const tableSectionProps = {
    data: filteredData,
    onDeliverableClick: handleOpenOverview,
    onViewAction: handleOpenOverview,
  };

  return (
    <>
      <section className="w-[96%] ml-[3.9%] mt-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 w-full">
          {TableMockData.length !== 0 && !selectedRow && (
            <LeftButtonAndTextCard h1="Clients"/>
          )}
          {/* Only show filters if not in overview */}
          {(!selectedRow && TableMockData.length !== 0) && (
            <div className="flex flex-wrap gap-4 mb-0 mt-2 md:mt-4" aria-label="Filter client">
              <FilterDropdown label="Project" options={getFilterOptions(filterOptions.project)} value={project} onChange={setProject} />
              <FilterDropdown label="Status" options={getFilterOptions(filterOptions.status)} value={status} onChange={setStatus} />
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px]">
          <Suspense fallback={<div>Loading...</div>}>
            {/* Conditional rendering: Table/EmptyState or Overview */}
            {!selectedRow ? (
              filteredData.length === 0 && TableMockData.length !== 0 ? (
                <EmptyState
                  icon={
                    <>
                      <Image src="/tile_background.svg" alt="background tile" width={180} height={80} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
                      <Image src="/search_empty.svg" alt="search empty" width={90} height={90} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
                    </>
                  }
                  title="No Client Matches Your Search"
                />
              ) : (
                TableMockData.length !== 0 && <DeliverablesTableSection {...tableSectionProps} />
              )
            ) : (
              TableMockData.length !== 0 && (
                <>
                  <div className="w-full flex justify-start items-start mb-2">
                    <BackButton onClick={handleBack} />
                  </div>
                  <Overview
                    deliverablesInProgress={mockOverviewCardData.deliverablesInProgress}
                    scheduledMeetings={mockOverviewCardData.scheduledMeetings}
                    selectedRow={selectedRow}
                  />
                </>
              )
            )}
            {/* If no clients, show empty state */
            TableMockData.length === 0 && (
              <EmptyState
                icon={
                  <>
                    <Image src="/meeting_empty_state.svg" alt="404 empty state" width={180} height={100}/>
                  </>
                }
                title="No client have been onboard yet"
                button="New Client"
              />
            )}
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default React.memo(ClientComponent);
