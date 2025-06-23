import React from "react";

interface FilterDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, options, value, onChange }) => {
  return (
    <div className="min-w-[120px]">
      <select
        className="w-full px-4 py-2 rounded-md border border-grey-500 bg-white text-[#5a3ee6] font-medium focus:outline-primary-900 text-sm md:text-base shadow-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" className="text-[#5a3ee6]">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
