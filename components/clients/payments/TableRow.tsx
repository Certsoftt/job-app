import React from "react";
import PaymentsBadge from "./Badge";
import ActionsDropdown from "@/components/ui/ActionsDropdown";

interface TableRowProps {
  row: any;
}

const rowBorderColor = (status: string) => {
  const s = status.toLowerCase();
  if (s === "pending confirmation") return "border-[#FFB300]";
  if (s === "overdue") return "border-[#F75555]";
  if (s === "paid") return "border-[#19C37D]";
  return "border-[#E3DEFF]";
};

const TableRow: React.FC<TableRowProps> = ({ row }) => (
  <tr className={`bg-white border-l-4 ${rowBorderColor(row.status)} transition-all`}>
    <td className="px-6 py-4 font-poppins text-[#232323] text-base">{row.invoice}</td>
    <td className="px-6 py-4 font-poppins text-[#232323] text-base">{row.amount}</td>
    <td className="px-6 py-4 font-poppins text-[#232323] text-base">{row.project}</td>
    <td className="px-6 py-4 font-poppins text-[#232323] text-base">{row.milestone}</td>
    <td className="px-6 py-4">
      <PaymentsBadge variant={row.status}>{row.status}</PaymentsBadge>
    </td>
    <td className="px-6 py-4 font-poppins text-[#232323] text-base">{row.date}</td>
    <td className="px-6 py-4 text-right">
      <ActionsDropdown items={[]} />
    </td>
  </tr>
);

export default TableRow;
