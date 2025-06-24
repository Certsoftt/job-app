import React, { useState } from "react";
import Tabs from "./Tabs";
import DetailOverview from "./DetailOverview";
import BackButton from "./BackButton";

const TABS = [
  { label: "Overview", id: "overview" },
  { label: "Comments", id: "comments", hasDot: true },
  { label: "Review Request", id: "review", hasDot: true },
];

interface DeliverableDetailProps {
  row: any;
  onBack: () => void;
  onDelete?: () => void;
}

const DeliverableDetail: React.FC<DeliverableDetailProps> = ({ row, onBack, onDelete }) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      <BackButton onClick={onBack} />
      <Tabs tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "overview" && <DetailOverview row={row} onDelete={onDelete} />}
      {/* TODO: Add Comments and ReviewRequest components here */}
    </div>
  );
};

export default DeliverableDetail;
