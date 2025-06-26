"use client";
import React, { useState } from "react";
import Table from "@/components/ui/Table";
import Pagination from "@/components/ui/Pagination";
// import { TableMockData } from "@/utils/mockTableAndFilterOptionsData";
import { useTableOrFilter } from "@/utils/mockTableAndFilterOptionsData";
import { TableRowData } from "@/components/ui/TableRow";

const PAGE_SIZE = 8;
const TableMockData = useTableOrFilter().tableMockData;
interface DeliverablesTableSectionProps {
  data?: typeof TableMockData;
  onDeliverableClick?: (row: TableRowData) => void;
  onViewAction?: (row: TableRowData) => void;
}

const DeliverablesTableSection: React.FC<DeliverablesTableSectionProps> = ({ data, onDeliverableClick, onViewAction }) => {
  const [tableData, setTableData] = useState(data || TableMockData);
  const [page, setPage] = useState(1);
  const total = Math.ceil(tableData.length / PAGE_SIZE);
  const paginated = tableData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleDeleteRow = (row: TableRowData) => {
    setTableData(prev => prev.filter(r => r !== row));
    // Optionally, add backend/API delete logic here
  };

  return (
    <section
      className="mt-6"
      aria-label="Deliverables Table Section"
    >
      <Table data={paginated} onDeliverableClick={onDeliverableClick} onViewAction={onViewAction} onDeleteRow={handleDeleteRow} />
      <Pagination current={page} total={total} onPageChange={setPage} />
    </section>
  );
};

export default DeliverablesTableSection;
