"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ShortCard from "../../ui/ShortCard";
import OverviewSkeleton from "./OverviewSkeleton";
import { useOverviewContext } from "./OverviewContext";
import { TableRowData } from "@/components/ui/TableRow";

const iconMap = {
  projects: "/overview/total_projects.svg",
  deliverables: "/overview/deliverables.svg",
  meetings: "/overview/scheduled.svg",
  invoices: "/overview/unpaid_invoice.svg",
  team: "/overview/assigned_team.svg",
  call: "/overview/phone-ringing.svg",
  email: "/overview/mail-send-envelope.svg",
  message: "/overview/chat-bubble-message.svg",
};

interface OverviewProps {
  deliverablesInProgress: number;
  scheduledMeetings: number;
  selectedRow?: TableRowData;
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
    <section className="bg-[#F8F6FF] border border-[#E3DEFF] rounded-xl p-4 w-full">
      <div className="flex items-center justify-between gap-6 mb-8">
        <div className="flex gap-4">
          <Image src="/comment_avatar.svg" alt="Profile" width={64} height={64} className="rounded-full border border-[#E3DEFF]" />
          <h2 className="text-2xl font-bold text-[#232323] items-center mb-1">{displayClientName}</h2>
        </div>
        <div className="flex-1">
          <div className="flex gap-4 justify-end text-[#A09CB6] text-sm gap-6">
            <button className="flex items-center gap-1"><Image src={iconMap.call} alt="Call" width={18} height={18} />Call</button>
            <button className="flex items-center gap-1"><Image src={iconMap.email} alt="Email" width={18} height={18} />Email</button>
            <button className="flex items-center gap-1"><Image src={iconMap.message} alt="Message" width={18} height={18} />Message</button>
          </div>
        </div>
      </div>
      <div className="flex gap-12 border-b border-[#E3DEFF] mb-8">
        {['Overview', 'Projects', 'Payments', 'Meetings'].map(tab => (
          <div key={tab} className="relative pb-2 cursor-pointer text-lg font-semibold text-[#232323] opacity-90">
            {tab}
            {/* TODO: Add tab state logic */}
            {tab === 'Overview' && <div className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-[#5A3EE6] rounded-t" />}
          </div>
        ))}
      </div>
      {/* Short Cards */}
      <div className="flex gap-6 mb-8">
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
        <ShortCard
          title="Assigned Team"
          value={assignedTeam.length === 0 ? <span className="text-[#A09CB6]">No assigned team</span> : null}
          iconSrc={iconMap.team}
          className="min-w-[220px] max-w-[220px] min-h-[120px] max-h-[120px]"
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
      </div>
    </section>
  );
};

export default Overview;
