"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { BadgeVariant } from "./Badge";
import DeleteConfirmModal from "@/components/ui/DeleteConfirmModal";
// import Image from "next/image";
import { usePathname } from 'next/navigation';
import ActionsDropdown from "./ActionsDropdown";
import { useActionsDropdownItems } from "@/utils/mockActionsDropdownData";
import { useOverviewContext } from "@/components/clients/overview/OverviewContext";
// import { useRouter } from "next/navigation";
const Badge = dynamic(() => import("@/components/ui/Badge"), { ssr: false });

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
  const [showDelete, setShowDelete] = useState(false);
  // const router = useRouter();
  const { setClientName } = useOverviewContext();
  // const [statusMap, setStatusMap] = useState({} as Record<string, BadgeVariant>);
  const pathname = usePathname();

  // Keyboard accessibility for Deliverable cell
  const handleDeliverableKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onDeliverableClick?.(row);
    }
  };

  // Normalize status for badge variant
  const normalizeStatus = (status: string): BadgeVariant => {
    const s = status.toLowerCase();
    if (s === "pending approval" || s === "pending") return "pending";
    if (s === "in progress" || s === "progress") return "progress";
    if (s === "not started" || s === "notstarted") return "notstarted";
    if (s === "upcoming") return "upcoming";
    if (s === "held") return "held";
    if (s === "cancelled" || s === "canceled") return "cancelled";
    if (s === "approved") return "approved";
    return "pending";
  };

  // Action handlers
  const handleView = () => {
    setClientName(row.columnThree || row.columnTwo || ""); // Use client name from row
    // router.push("/clients/overview"); // Route to overview page
    onViewAction?.(row);
  };
  // const handleEdit = () => {/* Add edit logic here */};
  const handleDelete = () => setShowDelete(true);
  const handleCancel = () => setShowDelete(true);
  const handleConfirmDelete = () => {
    setShowDelete(false);
    if (onDeleteRow) onDeleteRow(row);
  };

  // Get menu items for dropdown
  const menuItems = useActionsDropdownItems({
    onView: handleView,
    onEdit: handleView,
    onDelete: handleDelete,
    onCancel: handleCancel,
  });

  return (
    <tr className="border-b border-[#E3DEFF] bg-white">
      <td
        className="px-4 py-4 w-[260px] text-center align-middle font-poppins text-sm text-[#232323] cursor-pointer hover:underline focus:underline outline-none"
        tabIndex={0}
        role="button"
        aria-label={`View details for ${row.columnOne}`}
        onClick={() => onDeliverableClick?.(row)}
        onKeyDown={handleDeliverableKey}
        style={{ whiteSpace: "pre-line" }}
      >
        {row.columnOne}
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
      <td className={`px-4 py-4 w-[160px] text-center align-middle ${pathname === "/clients"?"font-poppins text-sm text-[#232323]":""}`}>
        {pathname === "/clients" 
        ?<React.Fragment>{row.columnFive}</React.Fragment>
        :<Badge variant={normalizeStatus(row.columnFive)}>{row.columnFive}</Badge>
        }
      </td>
      <td className="px-4 py-4 w-[140px] text-center align-middle font-poppins text-sm text-[#232323]" style={{ whiteSpace: "nowrap" }}>
        {row.columnSix}
      </td>
      <td className="cursor-pointer px-4 py-4 w-[120px] text-right align-middle relative">
        <ActionsDropdown items={menuItems} />
        <DeleteConfirmModal title="Delete Row?" description="Are you sure you want to delete this row? This action cannot be undone." open={showDelete} onCancel={() => setShowDelete(false)} onConfirm={handleConfirmDelete} />
      </td>
    </tr>
  );
};

export default TableRow;
