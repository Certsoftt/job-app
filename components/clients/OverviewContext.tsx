"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
// import { mockTeamOptions } from "@/utils/mockTeamOptions";
import { useTableOrFilter as useDeliverables } from "@/utils/mockTableAndFilterOptionsData";
import { useTableOrFilter as useMeetings } from "@/utils/mockTableAndFilterOptionsData";
import { useTableOrFilter as useClients } from "@/utils/mockTableAndFilterOptionsData";

export interface TeamMember {
  label: string;
  value: string;
  role?: string;
}

export interface OverviewContextType {
  assignedTeam: TeamMember[];
  setAssignedTeam: (team: TeamMember[]) => void;
  totalProjects: number;
  setTotalProjects: (n: number) => void;
  deliverablesInProgress: number;
  setDeliverablesInProgress: (n: number) => void;
  scheduledMeetings: number;
  setScheduledMeetings: (n: number) => void;
  unpaidInvoices: number;
  setUnpaidInvoices: (n: number) => void;
  loading: boolean;
  setLoading: (b: boolean) => void;
  clientName: string;
  setClientName: (name: string) => void;
}

const OverviewContext = createContext<OverviewContextType | undefined>(undefined);

export const OverviewProvider = ({ children }: { children: ReactNode }) => {
  const [assignedTeam, setAssignedTeam] = useState<TeamMember[]>([]);
  const [totalProjects, setTotalProjects] = useState(0);
  const [deliverablesInProgress, setDeliverablesInProgress] = useState(0);
  const [scheduledMeetings, setScheduledMeetings] = useState(0);
  const [unpaidInvoices, setUnpaidInvoices] = useState(0);
  const [loading, setLoading] = useState(true);
  const [clientName, setClientName] = useState("");

  // Dynamic data resolution
  const deliverables = useDeliverables().tableMockData;
  const meetings = useMeetings().tableMockData;
  const clients = useClients().tableMockData;

  useEffect(() => {
    // Example: set clientName from selected client (simulate selection for now)
    const selectedClient = clients[0]?.columnOne || "Tayo Wellens";
    setClientName(selectedClient);
    // Total Projects: from clients table, columnTwo for selected client
    const clientRow = clients.find(c => c.columnOne === selectedClient);
    setTotalProjects(clientRow ? parseInt(clientRow.columnTwo, 10) : 0);
    // Deliverables In Progress: count from deliverables table for selected client
    setDeliverablesInProgress(deliverables.filter(d => d.columnThree === selectedClient && d.columnFive.toLowerCase() === "in progress").length);
    // Scheduled Meetings: count from meetings table for selected client
    setScheduledMeetings(meetings.filter(m => m.columnTwo === selectedClient && m.columnFive.toLowerCase() === "upcoming").length);
    // Unpaid Invoices: mock value for now
    setUnpaidInvoices(200);
    // Assigned Team: mock logic, can be improved
    setAssignedTeam([
      { label: "John", value: "john", role: "Project Manager" },
      { label: "Lara", value: "lara", role: "Designer" },
      { label: "Tunde", value: "tunde", role: "Dev" },
    ]);
    setLoading(false);
  }, [deliverables, meetings, clients]);

  return (
    <OverviewContext.Provider value={{
      assignedTeam, setAssignedTeam,
      totalProjects, setTotalProjects,
      deliverablesInProgress, setDeliverablesInProgress,
      scheduledMeetings, setScheduledMeetings,
      unpaidInvoices, setUnpaidInvoices,
      loading, setLoading,
      clientName, setClientName,
    }}>
      {children}
    </OverviewContext.Provider>
  );
};

export const useOverviewContext = () => {
  const ctx = useContext(OverviewContext);
  if (!ctx) throw new Error("useOverviewContext must be used within OverviewProvider");
  return ctx;
};
