"use client";
import React, { useState } from "react";
import EditableText from "./EditableText";
import FileUpload from "./FileUpload";
import AddLink from "./AddLink";
import Image from "next/image";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { TableRowData } from "../default/TableRow";
import MultiAutocomplete, { Option } from "./MultiAutocomplete";
import { mockTeamOptions } from "@/utils/mockTeamOptions";

interface DeliverableData extends TableRowData {
  title: string;
  team: string;
  description: string;
  file: File | null;
  link: string;
}

const initialData: DeliverableData = {
  title: "Homepage Design",
  project: "Food Delivery Website",
  status: "Pending Approval",
  dueDate: "Feb 15",
  team: "Tunde (Designer), Bayo (PM)",
  description:
    "The wireframe should show the structural layout for the app homepage, including navigation, hero section, and quick actions.",
  file: null,
  link: "",
  deliverable: "Homepage Design",
  client: "Tayo Wellens",
  assignedTo: "John Doe",
};

interface DetailOverviewProps {
  row?: DeliverableData | TableRowData;
  onDelete?: () => void;
}

function toDeliverableData(row: DeliverableData | TableRowData | undefined): DeliverableData {
  if (!row) return initialData;
  return {
    ...initialData,
    ...row,
    title: (row as DeliverableData).title || row.deliverable,
    team: (row as DeliverableData).team || '',
    description: (row as DeliverableData).description || '',
    file: (row as DeliverableData).file || null,
    link: (row as DeliverableData).link || '',
  };
}

const DetailOverview: React.FC<DetailOverviewProps> = ({ row, onDelete }) => {
  const [data, setData] = useState<DeliverableData>(toDeliverableData(row));
  const [showDelete, setShowDelete] = useState(false);
  // Convert team string to Option[] for initial state
  const parseTeam = (teamStr: string): Option[] => {
    if (!teamStr) return [];
    return teamStr.split(",").map(s => {
      const trimmed = s.trim();
      const found = mockTeamOptions.find(opt => opt.label === trimmed);
      return found || { label: trimmed, value: trimmed.toLowerCase().replace(/\s+/g, "_") };
    });
  };
  const [team, setTeam] = useState<Option[]>(parseTeam(data.team));
  const [editingTeam, setEditingTeam] = useState(false);

  const handleFileChange = (file: File | null) => setData(d => ({ ...d, file }));
  const handleRemoveFile = () => setData(d => ({ ...d, file: null }));
  const handleAddLink = (url: string) => setData(d => ({ ...d, link: url }));

  const handleDelete = () => {
    setShowDelete(false);
    onDelete?.();
  };

  return (
    <section className="mt-6 bg-white rounded-xl border border-[#C6B9F6] border-l-4 border-l-[#5B2EDD] p-0 overflow-hidden">
      <DeleteConfirmModal open={showDelete} onCancel={() => setShowDelete(false)} onConfirm={handleDelete} />
      {/* Tabs */}
      <div className="border-b border-[#C6B9F6] rounded-t-xl bg-[#F7F5FF]">
        {/* Tabs component will be imported here */}
      </div>
      {/* Main Content */}
      <div className="p-7">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <div className="flex items-center gap-2">
            <EditableText
              value={data.title}
              onSave={val => setData(d => ({ ...d, title: val, deliverable: val }))}
              className="text-[22px] font-extrabold text-[#5B2EDD] font-poppins mr-2"
              ariaLabel="Edit deliverable title"
            />
            <button className="bg-transparent border-none outline-none p-1 ml-1" aria-label="Edit title">
              <Image src="/edit_square.svg" alt="edit" width={20} height={20} />
            </button>
            <button className="bg-transparent border-none outline-none p-1 ml-1" aria-label="Delete deliverable" onClick={() => setShowDelete(true)}>
              <Image src="/recycle-bin.svg" alt="delete" width={20} height={20} />
            </button>
          </div>
          <div className="flex gap-6 items-center">
            <button className="text-[#19C37D] font-semibold bg-transparent border-none outline-none focus:ring-2 focus:ring-[#19C37D]" aria-label="Mark as completed">Mark As Completed</button>
            <button className="text-[#F5A623] font-semibold bg-transparent border-none outline-none focus:ring-2 focus:ring-[#F5A623]" aria-label="Mark as in progress">Mark As In Progress</button>
          </div>
        </div>
        <div className="text-[#A09CB6] text-base font-poppins font-medium mb-2">{data.project}</div>
        <div className="text-lg font-bold text-[#232323] font-poppins mb-1">{data.status}</div>
        <div className="text-[#232323] text-sm font-bold font-poppins mb-4">Due {data.dueDate}</div>
        <hr className="border-[#E3DEFF] my-4" />
        <div className="mb-4">
          <div className="text-[#5B2EDD] font-semibold font-poppins text-sm mb-1">
            Assigned Team Members
          </div>
          {editingTeam ? (
            <MultiAutocomplete
              value={team}
              options={mockTeamOptions}
              onChange={opts => {
                setTeam(opts);
                setData(d => ({ ...d, team: opts.map(o => o.label).join(", ") }));
              }}
              placeholder="Add team members..."
              ariaLabel="Edit assigned team members"
              className="mt-1"
            />
          ) : (
            <div className="text-[#232323] text-base font-poppins cursor-pointer" onClick={() => setEditingTeam(true)}>
              {team.length > 0 ? team.map(t => t.label).join(", ") : <span className="text-[#A09CB6]">No team members</span>}
            </div>
          )}
        </div>
        <div className="mb-4">
          <div className="text-[#5B2EDD] font-semibold font-poppins text-sm mb-1">Deliverable Description</div>
          <EditableText
            value={data.description}
            onSave={val => setData(d => ({ ...d, description: val }))}
            className="text-[#232323] text-base font-poppins"
            ariaLabel="Edit deliverable description"
          />
        </div>
        <div className="mb-4">
          <div className="text-[#5B2EDD] font-semibold text-sm font-poppins mb-1">Upload Deliverable</div>
          <FileUpload file={data.file} onFileChange={handleFileChange} onRemove={handleRemoveFile} />
        </div>
        <AddLink onAdd={handleAddLink} />
        <hr className="border-[#E3DEFF] my-4" />
        <div className="mt-8 flex justify-start">
          <button className="border-2 border-[#5B2EDD] text-[#5B2EDD] font-semibold rounded-lg px-8 py-2 bg-white hover:bg-[#F7F5FF] focus:ring-2 focus:ring-[#5B2EDD] transition-colors" aria-label="Notify client">Notify Client</button>
        </div>
      </div>
    </section>
  );
};

export default DetailOverview;
