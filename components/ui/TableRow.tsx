"use client";
import React, { useState, useRef } from "react";
import Badge, { BadgeVariant } from "./Badge";
import DeleteConfirmModal from "@/components/deliverables/detail/DeleteConfirmModal";
import Image from "next/image";
import { usePathname } from 'next/navigation';

export interface TableRowData {
  columnOne: string;
  columnTwo: string;
  columnThree: string;
  columnFour: string;
  columnFive: string;
  columnSix: string;
}

interface TableRowProps {
  row: TableRowData;
  onDeliverableClick?: (row: TableRowData) => void;
  onViewAction?: (row: TableRowData) => void;
  onDeleteRow?: (row: TableRowData) => void;
}

// const statusMap: Record<string, BadgeVariant> = ;

const TableRow: React.FC<TableRowProps> = ({ row, onDeliverableClick, onViewAction, onDeleteRow }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [statusMap, setStatusMap] = useState({} as Record<string, BadgeVariant>)
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Keyboard accessibility for Deliverable cell
  const handleDeliverableKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onDeliverableClick?.(row);
    }
  };

  // Handle menu open/close
  const handleMenuClick = () => setMenuOpen((open) => !open);
  const handleView = () => {
    setMenuOpen(false);
    onViewAction?.(row);
  };

  // Modal close on outside click or Escape
  React.useEffect(() => {
    if (!showDelete) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowDelete(false);
    };
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowDelete(false);
      }
    };
    if(pathname === "/meetings"){
      const arr = row.columnOne.split("\n");
      setText1(arr[0]);
      setText2(arr[1]);
      setStatusMap({
        Upcoming: "upcoming",
        Held: "held",
        Cancelled: "cancelled",
      })
    }
    if(pathname === "/deliverables"){
      setStatusMap({
        Approved: "approved",
        "Pending Approval": "pending",
        "In Progress": "progress",
        "Not Started": "notstarted",
      })
    }
    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [showDelete, pathname, row.columnOne]);

  const handleDelete = () => {
    setShowDelete(false);
    if (onDeleteRow) onDeleteRow(row);
  };

  return (
    <tr className="border-b border-[#E3DEFF] bg-white">
      <td
        className="px-4 py-4 w-[260px] text-center align-middle font-poppins text-sm text-[#232323] cursor-pointer hover:underline focus:underline outline-none"
        tabIndex={0}
        role="button"
        aria-label={`View details for ${row.columnOne}`}
        onClick={() => onDeliverableClick?.(row)}
        onKeyDown={handleDeliverableKey}
        style={{ whiteSpace: "nowrap" }}
      >
        {pathname === "/meetings" && (<><p className="mb-1">{text1}</p><p>{text2}</p></>)}
        {pathname === "/deliverables" && (<>{row.columnOne}</>)}
      </td>
      <td className="px-4 py-4 w-[180px] text-center align-middle font-poppins text-sm text-[#232323]" style={{ whiteSpace: "nowrap" }}>
        {row.columnTwo}
      </td>
      <td className="px-4 py-4 w-[180px] text-center align-middle font-poppins text-sm text-[#232323]" style={{ whiteSpace: "nowrap" }}>
        {row.columnThree}
      </td>
      <td className="px-4 py-4 w-[200px] text-center align-middle font-poppins text-sm text-[#232323]" style={{ whiteSpace: "nowrap" }}>
        {row.columnFour}
      </td>
      <td className="px-4 py-4 w-[160px] text-center align-middle">
        <Badge variant={statusMap[row.columnFive] || pathname==="/deliverables"?"notstarted":"cancelled"}>{row.columnFive}</Badge>
      </td>
      <td className="px-4 py-4 w-[140px] text-center align-middle font-poppins text-sm text-[#232323]" style={{ whiteSpace: "nowrap" }}>
        {row.columnSix}
      </td>
      <td className="cursor-pointer px-4 py-4 w-[120px] text-right align-middle relative">
        <div ref={menuRef} className="inline-block">
          <button
            aria-label="More actions"
            className="flex items-center justify-center w-8 h-8 rounded hover:bg-grey-300 focus:outline-none focus:ring-2 focus:ring-primary"
            tabIndex={0}
            onClick={handleMenuClick}
          >
            <span className="sr-only">More actions</span>
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <circle cx="4" cy="10" r="2" fill="#232427" />
              <circle cx="10" cy="10" r="2" fill="#232427" />
              <circle cx="16" cy="10" r="2" fill="#232427" />
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-10 z-30 bg-white border border-[#E3DEFF] rounded-lg shadow-lg min-w-[160px] py-2 flex flex-col divide-y divide-[#E3DEFF]">
              <button
                className="flex items-center gap-2 px-4 py-3 text-[#5B2EDD] font-poppins font-medium text-base hover:bg-[#F7F5FF] focus:outline-none"
                onClick={handleView}
                tabIndex={0}
              >
                <Image src="/arrow-cursor.svg" alt="View" width={18} height={18} className="cursor-pointer"/>
                View
              </button>
              <button
                className="flex items-center gap-2 px-4 py-3 text-[#5B2EDD] font-poppins font-medium text-base hover:bg-[#F7F5FF] focus:outline-none"
                onClick={handleView /* Add edit logic here */ }
                tabIndex={0}
              >
                <Image src="/pencil--change-edit.svg" alt="Edit" width={18} height={18} className="cursor-pointer"/>
                Edit
              </button>
              <button
                className="flex items-center gap-2 px-4 py-3 text-red-600 font-poppins font-medium text-base hover:bg-[#F7F5FF] focus:outline-none"
                onClick={() => setShowDelete(true)}
                tabIndex={0}
              >
                {pathname==="/deliverables" && (<><Image src="/recycle-bin.svg" alt="Delete" width={18} height={18} className="cursor-pointer"/> Delete</>)}
                {pathname==="/meetings" && (<><Image src="/cancel.svg" alt="Cancel" width={18} height={18} className="cursor-pointer"/>Cancle</>)}
              </button>
            </div>
          )}
          <DeleteConfirmModal open={showDelete} onCancel={() => setShowDelete(false)} onConfirm={handleDelete} />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
