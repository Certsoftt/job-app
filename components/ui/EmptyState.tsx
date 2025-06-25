import React from "react";

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  button?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, description,button }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-24">
      <div className="mb-6 flex items-center justify-center relative min-h-[120px] min-w-[180px]">{icon}</div>
      <div className="font-extrabold text-2xl md:text-3xl text-[#232427] text-center mb-2 leading-tight">{title}</div>
      {description && <div className="text-[#7a7a7a] text-center text-base md:text-lg mt-1">{description}</div>}
      {button && <button className="cursor-pointer bg-[#5a3ee6] hover:bg-[#6d52e1] transition-colors text-white px-7 py-2.5 rounded-[8px] font-semibold text-[15px] shadow-none min-w-[150px] h-[40px] flex items-center justify-center" aria-label="Create new project">{button}</button>}
    </div>
  );
};

export default EmptyState;
