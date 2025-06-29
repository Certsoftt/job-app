import React from "react";

interface PaginationProps {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ current, total, onPageChange }) => {
  return (
    <nav
      className="flex items-center justify-center mt-8"
      aria-label="Pagination"
    >
      <div className="flex items-center bg-[#f6f6fb] rounded-[3px] shadow-sm px-4 py-2 gap-1 border border-[#edeafd]">
        <button
          className="flex items-center gap-1 px-2 py-1 text-[#bdbdbd] font-medium rounded transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
          aria-label="Previous page"
        >
          <span aria-hidden="true">&larr;</span>
          <span className="ml-1">Previous</span>
        </button>
        {[...Array(total)].map((_, idx) => (
          <button
            key={idx}
            className={`w-8 h-8 rounded-full text-sm font-semibold mx-1 transition-colors ${current === idx + 1 ? "bg-primary text-white" : "bg-transparent text-[#232427] hover:bg-primary-100"}`}
            onClick={() => onPageChange(idx + 1)}
            aria-current={current === idx + 1 ? "page" : undefined}
          >
            {idx + 1}
          </button>
        ))}
        <button
          className="flex items-center gap-1 px-2 py-1 text-[#bdbdbd] font-medium rounded transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          onClick={() => onPageChange(current + 1)}
          disabled={current === total}
          aria-label="Next page"
        >
          <span className="mr-1">Next</span>
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
