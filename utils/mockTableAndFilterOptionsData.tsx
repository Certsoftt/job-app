"use client";
import React, { useContext, useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import { TableRowData } from "@/components/ui/TableRow";

type TableColumnContextProps = {
    children: React.ReactNode
}
type TableColumn = {
    columnOne: string;
    columnTwo: string;
    columnThree: string;
    columnFour: string;
    columnFive: string;
    columnSix: string;
}[]
type FilterOptions = {
  client: string[],
  project: string[],
  status: string[],
  date: string[],
}
type TableColumnContextValueProps = { 
    tableMockData: TableColumn;
    filterOptions: FilterOptions;
}


const TableColumnContext = React.createContext({} as TableColumnContextValueProps)

export default function TableAndFilterOptionsMockDataProvider({children}:TableColumnContextProps){
  const pathname = usePathname();
  const [tableMockData, setTableMockData] = useState([] as TableRowData[]);
  const [filterOptions, setFilterOptions] = useState({} as FilterOptions);
  useEffect(()=>{
    if(pathname === "/deliverables"){
    setFilterOptions({
      client: ["All Clients", "Tayo Wellens", "Andrew James"],
      project: ["All Projects", "Food Delivery App", "Project Management App"],
      status: ["All Status", "Approved", "Pending Approval", "In Progress", "Not Started"],
      date: ["Newest", "Oldest", "Feb 15", "Due Today", "Due Tomorrow"],
    });
    setTableMockData([
      { columnOne: "Homepage Design", columnTwo: "Food Delivery App", columnThree: "Tayo Wellens", columnFour: "John Doe", columnFive: "Approved", columnSix: "Feb 15" },
      { columnOne: "Homepage Design", columnTwo: "Food Delivery App", columnThree: "Tayo Wellens", columnFour: "John Doe", columnFive: "Pending Approval", columnSix: "Feb 15" },
      { columnOne: "Homepage Design", columnTwo: "Food Delivery App", columnThree: "Tayo Wellens", columnFour: "John Doe", columnFive: "In Progress", columnSix: "Feb 15" },
      { columnOne: "Homepage Design", columnTwo: "Food Delivery App", columnThree: "Tayo Wellens", columnFour: "John Doe", columnFive: "Not Started", columnSix: "Feb 15" },
      { columnOne: "Homepage Design", columnTwo: "Food Delivery App", columnThree: "Tayo Wellens", columnFour: "John Doe", columnFive: "Not Started", columnSix: "Feb 15" },
      { columnOne: "Homepage Design", columnTwo: "Food Delivery App", columnThree: "Tayo Wellens", columnFour: "John Doe", columnFive: "Not Started", columnSix: "Feb 15" },
      { columnOne: "Homepage Design", columnTwo: "Food Delivery App", columnThree: "Tayo Wellens", columnFour: "John Doe", columnFive: "Not Started", columnSix: "Feb 15" },
      { columnOne: "Homepage Design", columnTwo: "Food Delivery App", columnThree: "Tayo Wellens", columnFour: "John Doe", columnFive: "Not Started", columnSix: "Feb 15" },
      { columnOne: "Homepage Design", columnTwo: "Food Delivery App", columnThree: "Tayo Wellens", columnFour: "John Doe", columnFive: "Not Started", columnSix: "Feb 15" },
      { columnOne: "Homepage Design", columnTwo: "Food Delivery App", columnThree: "Tayo Wellens", columnFour: "John Doe", columnFive: "Not Started", columnSix: "Feb 15" },
    ])
  }
  if(pathname === "/meetings"){
    setFilterOptions({
      client: ["All Clients", "Tayo Wellens", "Andrew James"],
      project: ["All Projects", "Food Delivery App", "Project Management App"],
      status: ["All Status", "Upcoming", "Held", "Cancelled", "Rescheduled"],
      date: ["Today", "Tommorrow", "May 2 2025", "June 2 2025", "July 4 2025"],
    });
    setTableMockData([
      { columnOne: "May 2 2025\n11:00 am", columnThree: "Food Delivery Website", columnTwo: "Tayo Wellens", columnFour: "Dashboard Feedback", columnFive: "Upcoming", columnSix: "Zoom" },
      { columnOne: "May 2 2025\n11:00 am", columnThree: "Food Delivery Website", columnTwo: "Tayo Wellens", columnFour: "Sprint Planning", columnFive: "Upcoming", columnSix: "Zoom" },
      { columnOne: "May 2 2025\n11:00 am", columnThree: "Food Delivery Website", columnTwo: "Tayo Wellens", columnFour: "Design Review", columnFive: "Upcoming", columnSix: "Zoom" },
      { columnOne: "May 2 2025\n11:00 am", columnThree: "Food Delivery Website", columnTwo: "Tayo Wellens", columnFour: "Dashboard Feedback", columnFive: "Upcoming", columnSix: "Zoom" },
      { columnOne: "May 2 2025\n11:00 am", columnThree: "Food Delivery Website", columnTwo: "Tayo Wellens", columnFour: "Dashboard Feedback", columnFive: "Held", columnSix: "Teams" },
      { columnOne: "May 2 2025\n11:00 am", columnThree: "Food Delivery Website", columnTwo: "Tayo Wellens", columnFour: "Dashboard Feedback", columnFive: "Held", columnSix: "Teams" },
      { columnOne: "May 2 2025\n11:00 am", columnThree: "Food Delivery Website", columnTwo: "Tayo Wellens", columnFour: "Retrospective", columnFive: "Cancelled", columnSix: "Google Meet" },
      { columnOne: "May 2 2025\n11:00 am", columnThree: "E-Commerce Platform", columnTwo: "Tayo Wellens", columnFour: "Requirements Gathering", columnFive: "Cancelled", columnSix: "Google Meet" },
      { columnOne: "June 2 2025\n2:30 pm", columnThree: "Mobile App Redesign", columnTwo: "Tayo Wellens", columnFour: "Requirements Gathering", columnFive: "Held", columnSix: "Zoom" },
      { columnOne: "July 4 2025\n7:30 am", columnThree: "HR Portal", columnTwo: "Tayo Wellens", columnFour: "Retrospective", columnFive: "Cancelled", columnSix: "Google Meet" },
    ])
  }
  },[pathname])
  return(
    <TableColumnContext.Provider value={{filterOptions, tableMockData}}>
      {children}
    </TableColumnContext.Provider>
  )

} 

export const useTableOrFilter = ()=>{
  return useContext(TableColumnContext);
}

