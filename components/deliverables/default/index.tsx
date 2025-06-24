"use client";
import React, { useState } from "react";
import Table from "./Table";
import Pagination from "./Pagination";
import { TableMockData } from "@/utils/mockData";
import { TableRowData } from "./TableRow";

const PAGE_SIZE = 8;

interface DeliverablesTableSectionProps {
  data?: typeof TableMockData;
  onDeliverableClick?: (row: TableRowData) => void;
  onViewAction?: (row: TableRowData) => void;
}

const DeliverablesTableSection: React.FC<DeliverablesTableSectionProps> = ({ data, onDeliverableClick, onViewAction }) => {
  const tableData = data || TableMockData;
  const [page, setPage] = useState(1);
  const total = Math.ceil(tableData.length / PAGE_SIZE);
  const paginated = tableData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <section
      className="w-[96%] ml-[3.9%] mt-6"
      aria-label="Deliverables Table Section"
    >
      <Table data={paginated} onDeliverableClick={onDeliverableClick} onViewAction={onViewAction} />
      <Pagination current={page} total={total} onPageChange={setPage} />
    </section>
  );
};

export default DeliverablesTableSection;
