import React from "react";

interface DeleteConfirmModalProps {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({ open, onCancel, onConfirm }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-lg shadow-lg p-8 min-w-[320px] flex flex-col items-center">
        <div className="text-lg font-bold text-[#232323] mb-4">Delete Deliverable?</div>
        <div className="text-[#7a7a7a] mb-6 text-center">Are you sure you want to delete this deliverable? This action cannot be undone.</div>
        <div className="flex gap-4 w-full justify-center">
          <button
            className="px-6 py-2 rounded-lg border-2 border-[#5B2EDD] text-[#5B2EDD] font-semibold bg-white hover:bg-[#F7F5FF] focus:ring-2 focus:ring-[#5B2EDD]"
            onClick={onCancel}
            aria-label="Cancel delete"
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 rounded-lg bg-[#5B2EDD] text-white font-semibold hover:bg-[#6d52e1] focus:ring-2 focus:ring-[#5B2EDD]"
            onClick={onConfirm}
            aria-label="Confirm delete"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
