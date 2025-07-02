"use client";
import React, { useState, useRef, useEffect } from "react";

interface Option {
  label: string;
  value: string;
}

interface MultiAutocompleteProps {
  value: Option[];
  options: Option[];
  onChange: (val: Option[]) => void;
  placeholder?: string;
  className?: string;
  ariaLabel?: string;
}

const MultiAutocomplete: React.FC<MultiAutocompleteProps> = ({ value, options, onChange, placeholder, className = '', ariaLabel }) => {
  const [input, setInput] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter(
    (opt) =>
      opt.label.toLowerCase().includes(input.toLowerCase()) &&
      !value.some((v) => v.value === opt.value)
  );

  useEffect(() => {
    if (showOptions && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showOptions]);

  const handleSelect = (opt: Option) => {
    onChange([...value, opt]);
    setInput("");
    setShowOptions(false);
  };

  const handleRemove = (val: string) => {
    onChange(value.filter((v) => v.value !== val));
  };

  return (
    <div className={`relative ${className}`} aria-label={ariaLabel}>
      <div className="flex flex-wrap gap-2 border border-[#C6B9F6] rounded px-2 py-1 min-h-[40px] bg-white">
        {value.map((v) => (
          <span key={v.value} className="flex items-center bg-[#F7F5FF] text-[#5B2EDD] px-2 py-1 rounded-full text-sm font-poppins">
            {v.label}
            <button
              type="button"
              className="ml-1 text-[#5B2EDD] hover:text-[#3a1e8c] focus:outline-none"
              aria-label={`Remove ${v.label}`}
              onClick={() => handleRemove(v.value)}
            >
              ×
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          value={input}
          onChange={e => { setInput(e.target.value); setShowOptions(true); }}
          onFocus={() => setShowOptions(true)}
          onBlur={() => setTimeout(() => setShowOptions(false), 100)}
          placeholder={placeholder}
          className="flex-1 min-w-[120px] border-none outline-none bg-transparent text-base font-poppins text-[#232323]"
        />
      </div>
      {showOptions && filteredOptions.length > 0 && (
        <ul className="absolute z-10 left-0 right-0 bg-white border border-[#C6B9F6] rounded mt-1 max-h-40 overflow-y-auto shadow-lg">
          {filteredOptions.map((opt) => (
            <li
              key={opt.value}
              className="px-4 py-2 cursor-pointer hover:bg-[#F7F5FF] text-[#232323] font-poppins"
              onMouseDown={() => handleSelect(opt)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export type { Option };
export default MultiAutocomplete;
