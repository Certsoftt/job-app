"use client";
import React, { useState } from "react";

interface AddLinkProps {
  onAdd: (url: string) => void;
}

const AddLink: React.FC<AddLinkProps> = ({ onAdd }) => {
  const [showInput, setShowInput] = useState(false);
  const [url, setUrl] = useState("");

  const handleAdd = () => {
    if (url.trim()) {
      onAdd(url.trim());
      setUrl("");
      setShowInput(false);
    }
  };

  return (
    <div className="mt-2">
      {showInput ? (
        <div className="flex items-center gap-2">
          <input
            type="url"
            value={url}
            onChange={e => setUrl(e.target.value)}
            className="border border-[#C6B9F6] rounded px-2 py-1 text-base font-poppins min-w-[220px]"
            placeholder="Paste link here..."
            aria-label="Add link"
          />
          <button
            type="button"
            className="text-[#5B2EDD] font-semibold px-3 py-1 rounded bg-[#F7F5FF] border-none outline-none focus:ring-2 focus:ring-[#5B2EDD]"
            onClick={handleAdd}
            aria-label="Submit link"
          >
            Add
          </button>
          <button
            type="button"
            className="text-[#A09CB6] font-semibold px-3 py-1 rounded bg-transparent border-none outline-none focus:ring-2 focus:ring-[#A09CB6]"
            onClick={() => setShowInput(false)}
            aria-label="Cancel add link"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="text-[#5B2EDD] font-semibold bg-transparent border-none outline-none focus:ring-2 focus:ring-[#5B2EDD]"
          onClick={() => setShowInput(true)}
          aria-label="Add link"
        >
          Add Link
        </button>
      )}
    </div>
  );
};

export default AddLink;
