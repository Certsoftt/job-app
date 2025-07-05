import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { mockPaymentsData } from "@/utils/mockPaymentsData";

interface TableProps {
  data: typeof mockPaymentsData;
  loading?: boolean;
}

const Table: React.FC<TableProps> = ({ data, loading }) => (
  <div className="overflow-x-auto rounded-lg shadow-md bg-transparent">
    <table className="min-w-full bg-transparent" role="table" aria-label="Payments table">
      <TableHeader />
      <tbody>
        {loading
          ? Array.from({ length: 7 }).map((_, i) => (
              <tr key={i} className="h-16 animate-pulse bg-gray-100">
                {Array.from({ length: 7 }).map((_, j) => (
                  <td key={j} className="px-6 py-4 rounded bg-gray-200" />
                ))}
              </tr>
            ))
          : data.map((row, idx) => <TableRow key={idx} row={row} />)}
      </tbody>
    </table>
  </div>
);

export default Table;
