"use client";
import React, { useEffect } from "react";
import ShortCard from "../../ui/ShortCard";
import OverviewSkeleton from "./OverviewSkeleton";
import { useOverviewContext } from "./OverviewContext";
import { TableRowData } from "@/components/ui/TableRow";
import TopClientCard from "@/components/ui/TopClientCard";

interface OverviewProps {
  deliverablesInProgress: number;
  scheduledMeetings: number;
  selectedRow?: TableRowData;
}

const iconMap = {
  projects: "/overview/total_projects.svg",
  deliverables: "/overview/deliverables.svg",
  meetings: "/overview/scheduled.svg",
  invoices: "/overview/unpaid_invoice.svg",
  team: "/overview/assigned_team.svg",
}

const Overview: React.FC<OverviewProps> = ({ deliverablesInProgress, scheduledMeetings, selectedRow }) => {
  const {
    assignedTeam,
    totalProjects,
    loading,
    unpaidInvoices,
  } = useOverviewContext();

  useEffect(() => {
    // Optionally, fetch or sync data here
  }, []);

  if (loading) return <OverviewSkeleton />;

  // Determine client name robustly from selectedRow
  let displayClientName = selectedRow?.columnOne?.trim();
  if (!displayClientName) displayClientName = "Client Name Unavailable";

  return (
    <>
      <TopClientCard displayClientName={displayClientName} />
      <section className="flex pl-2 rounded-xl p-4 w-full">
      {/* Short Cards */}
        <div className="flex gap-3 mb-4">
          <ShortCard
            title="Total Projects"
            value={totalProjects}
            subtitle="Active Projects"
            iconSrc={iconMap.projects}
          />
          <ShortCard
            title="Deliverables In Progress"
            value={deliverablesInProgress}
            iconSrc={iconMap.deliverables}
          />
          <ShortCard
            title="Scheduled Meetings"
            value={scheduledMeetings}
            iconSrc={iconMap.meetings}
          />
          <ShortCard
            title="Unpaid Invoices"
            value={<span className="font-bold">{unpaidInvoices}K</span>}
            iconSrc={iconMap.invoices}
          />
        </div>
        {/* Assigned Team Card */}
        <ShortCard
          title="Assigned Team"
          value={assignedTeam.length === 0 ? <span className="text-[#A09CB6]">No assigned team</span> : null}
          iconSrc={iconMap.team}
          className="min-w-[220px] max-w-[220px] min-h-[120px]"
        >
          {assignedTeam.length > 0 && (
            <div className="mt-2 text-xs text-[#232323]">
              {assignedTeam.map(tm => (
                <div key={tm.value} className="mb-1">
                  <span className="font-medium">{tm.role ? tm.role + ": " : ""}</span>
                  <span className="font-bold">{tm.label}</span>
                </div>
              ))}
            </div>
          )}
        </ShortCard>
      </section>
    </>
  );
};

export default Overview;
