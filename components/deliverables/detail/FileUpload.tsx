import React, { useRef } from "react";

interface FileUploadProps {
  file: File | null;
  onFileChange: (file: File | null) => void;
  onRemove: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ file, onFileChange, onRemove }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileChange(e.target.files[0]);
    }
  };

  return (
    <div
      className="border border-[#5B2EDD] rounded-lg px-4 py-3 flex items-center gap-4 bg-white min-h-[56px] relative"
      onDrop={handleDrop}
      onDragOver={e => e.preventDefault()}
      tabIndex={0}
      aria-label="Upload Deliverable"
    >
      <label htmlFor="file-upload" className="flex items-center cursor-pointer select-none">
        <span className="font-semibold text-[#5B2EDD] text-sm mr-4">Submit File</span>
        <input
          id="file-upload"
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          aria-label="Upload file"
        />
        <button
          type="button"
          className="ml-2 text-[#5B2EDD] text-xl font-bold bg-transparent border-none outline-none focus:ring-2 focus:ring-[#5B2EDD] rounded"
          onClick={() => inputRef.current?.click()}
          aria-label="Add file"
        >
          +
        </button>
      </label>
      {file && (
        <div className="flex items-center gap-2 ml-6">
          <span className="text-[#5B2EDD] text-sm flex items-center">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mr-1"><path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.828A2 2 0 0 0 19.414 7.414l-4.828-4.828A2 2 0 0 0 12.172 2H6Z" stroke="#5B2EDD" strokeWidth="1.5"/><path d="M12 2v6a2 2 0 0 0 2 2h6" stroke="#5B2EDD" strokeWidth="1.5"/></svg>
            {file.name}
          </span>
          <span className="text-xs text-[#A09CB6]">(Uploaded {new Date().toLocaleDateString()})</span>
          <button
            type="button"
            className="ml-2 text-[#5B2EDD] text-lg font-bold bg-transparent border-none outline-none focus:ring-2 focus:ring-[#5B2EDD] rounded"
            onClick={onRemove}
            aria-label="Remove file"
          >
            &minus;
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
