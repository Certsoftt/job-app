"use client";
import React, { useState } from "react";
import Tabs from "./Tabs";
import DetailOverview from "./DetailOverview";
import BackButton from "../../ui/BackButton";
import { TableRowData } from "@/components/ui/TableRow";
import ReviewRequest from "./ReviewRequest";
import { mockReviewRequests } from "@/utils/mockReviewRequests";
import Comment from "./Comment";
import { mockComments } from "@/utils/mockComments";

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
  const [comments, setComments] = useState(mockComments);

  // Dynamically set hasDot for Comments and Review Request tabs
  const tabsWithDot = TABS.map(tab => {
    if ((tab.id === "comments" || tab.id === "review") && activeTab === tab.id) {
      return { ...tab, hasDot: false };
    }
    return tab;
  });

  const handleSendComment = (msg: string) => {
    setComments(prev => [
      ...prev,
      {
        id: (prev.length + 1).toString(),
        user: "Client",
        avatar: "/comment_avatar.svg",
        message: msg,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div className="w-[98%] mt-8">
      <BackButton onClick={onBack} />
      <Tabs tabs={tabsWithDot} activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "overview" && <DetailOverview row={row} onDelete={onDelete} />}
      {activeTab === "comments" && (
        <Comment comments={comments} onSend={handleSendComment} currentUser="Client" />
      )}
      {activeTab === "review" && <ReviewRequest requests={mockReviewRequests} />}
    </div>
  );
};

export default DeliverableDetail;
