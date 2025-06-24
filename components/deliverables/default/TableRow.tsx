import React, { useState, useRef } from "react";
import Badge, { BadgeVariant } from "./Badge";
import RowCard from "./RowCard";

export interface TableRowData {
  deliverable: string;
  project: string;
  client: string;
  assignedTo: string;
  status: string;
  dueDate: string;
}

interface TableRowProps {
  row: TableRowData;
  onDeliverableClick?: (row: TableRowData) => void;
  onViewAction?: (row: TableRowData) => void;
}

const statusMap: Record<string, BadgeVariant> = {
  Approved: "approved",
  "Pending Approval": "pending",
  "In Progress": "progress",
  "Not Started": "notstarted",
};

const TableRow: React.FC<TableRowProps> = ({ row, onDeliverableClick, onViewAction }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Close menu on outside click
  React.useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  return (
    <tr>
      <td colSpan={7} className="p-0 border-none bg-transparent">
        <div className="flex items-center rounded-lg border border-[#E3DEFF] bg-white min-h-[64px] my-2 w-full gap-0 shadow-none">
          <span
            className="flex-1 font-poppins font-normal text-sm text-[#232323] leading-6 pl-6 pr-2 py-4 whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:underline focus:underline outline-none"
            tabIndex={0}
            role="button"
            aria-label={`View details for ${row.deliverable}`}
            onClick={() => onDeliverableClick?.(row)}
            onKeyDown={handleDeliverableKey}
          >
            {row.deliverable}
          </span>
          <RowCard>{row.project}</RowCard>
          <RowCard>{row.client}</RowCard>
          <RowCard>{row.assignedTo}</RowCard>
          <span className="flex-1 flex items-center justify-start px-2 py-4">
            <Badge variant={statusMap[row.status] || "notstarted"}>{row.status}</Badge>
          </span>
          <RowCard>{row.dueDate}</RowCard>
          <span className="flex-1 flex justify-end pr-6 py-4 relative" ref={menuRef}>
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
              <div className="absolute right-0 top-10 z-20 bg-white border border-[#E3DEFF] rounded-lg shadow-lg min-w-[120px] py-2">
                <button
                  className="w-full text-left px-4 py-2 text-[#5B2EDD] hover:bg-[#F7F5FF] font-poppins font-medium text-sm focus:outline-none"
                  onClick={handleView}
                  tabIndex={0}
                >
                  View
                </button>
                {/* Add more actions here if needed */}
              </div>
            )}
          </span>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
