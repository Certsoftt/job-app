import React from "react";

interface FilterDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, options, value, onChange }) => {
  return (
    <div className="cursor-pointer min-w-[120px] filterdropdown_1366">
      <select
        className="w-full py-2 cursor-pointer rounded-md border border-grey-500 bg-white text-[#5a3ee6] font-medium focus:outline-primary-900 text-sm md:text-sm shadow-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" className="cursor-pointer text-[#5a3ee6]">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
