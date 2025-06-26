import React from "react";
import TableHeader from "@/components/ui/TableHeader";
import TableRow, { TableRowData } from "@/components/ui/TableRow";

interface TableProps {
  data: TableRowData[];
  onDeliverableClick?: (row: TableRowData) => void;
  onViewAction?: (row: TableRowData) => void;
  onDeleteRow?: (row: TableRowData) => void;
}

const Table: React.FC<TableProps> = ({ data, onDeliverableClick, onViewAction, onDeleteRow }) => (
  <div className="overflow-x-auto rounded-lg shadow-md bg-transparent">
    <table className="min-w-full bg-transparent" role="table" aria-label="Deliverables table">
      <TableHeader />
      <tbody>
        {data.map((row, idx) => (
          <TableRow
            key={idx}
            row={row}
            onDeliverableClick={onDeliverableClick}
            onViewAction={onViewAction}
            onDeleteRow={onDeleteRow}
          />
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
