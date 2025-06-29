"use client";
import React, { useState } from "react";
import Badge, { BadgeVariant } from "./Badge";
import DeleteConfirmModal from "@/components/deliverables/detail/DeleteConfirmModal";
// import Image from "next/image";
import { usePathname } from 'next/navigation';
import ActionsDropdown from "./ActionsDropdown";
import { useActionsDropdownItems } from "@/utils/mockActionsDropdownData";

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
  // const [statusMap, setStatusMap] = useState({} as Record<string, BadgeVariant>);
  const pathname = usePathname();

  // Keyboard accessibility for Deliverable cell
  const handleDeliverableKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onDeliverableClick?.(row);
    }
  };

  // Status mapping logic
  // React.useEffect(() => {
  //   if (pathname === "/meetings") {
  //     setStatusMap({
  //       Upcoming: "upcoming",
  //       Held: "held",
  //       Cancelled: "cancelled",
  //     });
  //   }
  //   if (pathname === "/deliverables") {
  //     setStatusMap({
  //       Approved: "approved",
  //       "Pending Approval": "pending",
  //       "In Progress": "progress",
  //       "Not Started": "notstarted",
  //     });
  //   }
  // }, [pathname]);

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
  const handleView = () => onViewAction?.(row);
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
        style={{ whiteSpace: "nowrap" }}
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
      <td className="px-4 py-4 w-[160px] text-center align-middle">
        <Badge variant={normalizeStatus(row.columnFive)}>{row.columnFive}</Badge>
      </td>
      <td className="px-4 py-4 w-[140px] text-center align-middle font-poppins text-sm text-[#232323]" style={{ whiteSpace: "nowrap" }}>
        {row.columnSix}
      </td>
      <td className="cursor-pointer px-4 py-4 w-[120px] text-right align-middle relative">
        <ActionsDropdown items={menuItems} />
        <DeleteConfirmModal open={showDelete} onCancel={() => setShowDelete(false)} onConfirm={handleConfirmDelete} />
      </td>
    </tr>
  );
};

export default TableRow;
