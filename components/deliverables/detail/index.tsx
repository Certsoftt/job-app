"use client";
import React, { useState } from "react";
import Tabs from "./Tabs";
import DetailOverview from "./DetailOverview";
import BackButton from "./BackButton";
import { TableRowData } from "../default/TableRow";
import ReviewRequest from "./ReviewRequest";
import { mockReviewRequests } from "@/utils/mockReviewRequests";

const TABS: { label: string; id: string; hasDot?: boolean }[] = [
  { label: "Overview", id: "overview" },
  { label: "Comments", id: "comments", hasDot: true },
  { label: "Review Request", id: "review", hasDot: true },
];

interface DeliverableDetailProps {
  row: TableRowData;
  onBack: () => void;
  onDelete?: () => void;
}

const DeliverableDetail: React.FC<DeliverableDetailProps> = ({ row, onBack, onDelete }) => {
  const [activeTab, setActiveTab] = useState("overview");

  // Dynamically set hasDot for Comments and Review Request tabs
  const tabsWithDot = TABS.map(tab => {
    if ((tab.id === "comments" || tab.id === "review") && activeTab === tab.id) {
      return { ...tab, hasDot: false };
    }
    return tab;
  });

  return (
    <div className="w-[98%] mt-8">
      <BackButton onClick={onBack} />
      <Tabs tabs={tabsWithDot} activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "overview" && <DetailOverview row={row} onDelete={onDelete} />}
      {/* Comments tab can be added here */}
      {activeTab === "review" && <ReviewRequest requests={mockReviewRequests} />}
    </div>
  );
};

export default DeliverableDetail;
