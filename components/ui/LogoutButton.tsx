import React from "react";

const LogoutButton: React.FC = () => {
  return (
    <button
      type="button"
      aria-label="Logout"
      className="w-full flex items-center justify-start gap-2 mr-2 border border-red-200 text-red-500 py-2 rounded-md font-semibold text-sm hover:bg-red-50 transition-colors"
    >
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        className="text-red-500"
        aria-hidden="true"
      >
        <path
          d="M6 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
          strokeWidth="2"
        />
        <path
          d="M12 16v-4m0 0V8m0 4H4m8 0h8"
          strokeWidth="2"
        />
      </svg>
      Logout
    </button>
  );
};

export default React.memo(LogoutButton);
