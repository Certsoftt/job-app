"use client";
import React, { createContext, useState, useEffect, useCallback } from "react";
import { useTableOrFilter } from "@/utils/mockTableAndFilterOptionsData";
import { mockTeamOptions } from "@/utils/mockTeamOptions";

export const AppDataContext = createContext<any>({});

export const AppDataProvider = ({ children }: { children: React.ReactNode }) => {
  // Simulate selected client row (would come from /clients table row click)
  const [selectedClient, setSelectedClient] = useState<any>({
    name: "Tayo Wellens",
    avatar: "/profile.jpg",
    projects: 3,
    unpaidInvoices: "200K",
  });
  const [assignedTeam, setAssignedTeam] = useState<any[]>([...mockTeamOptions]);
  const [activeTab, setActiveTab] = useState("Overview");
  const [loading, setLoading] = useState(false);

  // Table data from context
  const { tableMockData: deliverablesData } = useTableOrFilter();
  // For meetings, you may want to use a separate context/provider if needed
  // For now, simulate meetings data as deliverablesData
  const meetingsData = deliverablesData;

  // Overview stats logic
  const overviewStats = {
    totalProjects: selectedClient.projects,
    deliverablesInProgress: deliverablesData.filter(
      (row: any) => row.columnFive.toLowerCase() === "in progress" && row.columnThree === selectedClient.name
    ).length,
    scheduledMeetings: meetingsData.filter(
      (row: any) => row.columnFive.toLowerCase() === "upcoming" && row.columnTwo === selectedClient.name
    ).length,
    unpaidInvoices: selectedClient.unpaidInvoices,
  };

  // Simulate profile
  const clientProfile = {
    name: selectedClient.name,
    avatar: selectedClient.avatar,
  };

  // Card click handler
  const onShortCardClick = useCallback((type: string) => {
    // Implement navigation/filter logic here
    // e.g., router.push with filters or set state
    // For now, just log
    console.log("Card clicked:", type);
  }, []);

  // Simulate loading state
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, [selectedClient, assignedTeam, activeTab, deliverablesData]);

  // Real-time update simulation: update assigned team if changed elsewhere
  // (In real app, use a global store or websocket)

  return (
    <AppDataContext.Provider
      value={{
        clientProfile,
        overviewStats,
        assignedTeam,
        setAssignedTeam,
        onShortCardClick,
        activeTab,
        setActiveTab,
        loading,
        setSelectedClient,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
