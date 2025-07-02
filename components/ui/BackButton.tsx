import React from "react";

interface BackButtonProps {
  onClick: () => void;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, className="" }) => (
  <div className={`${className}`}>
    <button
      onClick={onClick}
      className={`flex items-center gap-2 text-[#5B2EDD] font-poppins font-semibold text-base bg-transparent border-none outline-none focus:ring-2 focus:ring-[#5B2EDD] px-2 py-1 rounded-md mb-4 ml-2`}
      aria-label="Back to Deliverables Table"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M13 16L7 10L13 4" stroke="#232323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Back
    </button>
  </div>
);

export default BackButton;
