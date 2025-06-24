import React from "react";

interface ActionsMenuProps {
  label?: string;
}

const ActionsMenu: React.FC<ActionsMenuProps> = ({ label }) => (
  <button
    aria-label={label || "More actions"}
    className="flex items-center justify-center w-8 h-8 rounded hover:bg-grey-300 focus:outline-none focus:ring-2 focus:ring-primary"
    tabIndex={0}
  >
    <span className="sr-only">More actions</span>
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <circle cx="4" cy="10" r="2" fill="#232427" />
      <circle cx="10" cy="10" r="2" fill="#232427" />
      <circle cx="16" cy="10" r="2" fill="#232427" />
    </svg>
  </button>
);

export default ActionsMenu;
