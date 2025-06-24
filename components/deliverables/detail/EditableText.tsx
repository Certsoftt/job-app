import React, { useState, useRef, useEffect } from "react";

interface EditableTextProps {
  value: string;
  onSave: (val: string) => void;
  className?: string;
  inputClassName?: string;
  ariaLabel?: string;
}

const EditableText: React.FC<EditableTextProps> = ({ value, onSave, className = '', inputClassName = '', ariaLabel }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  const handleBlur = () => {
    setEditing(false);
    if (text !== value) onSave(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setEditing(false);
      if (text !== value) onSave(text);
    } else if (e.key === 'Escape') {
      setText(value);
      setEditing(false);
    }
  };

  return editing ? (
    <input
      ref={inputRef}
      value={text}
      onChange={e => setText(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={`border border-[#C6B9F6] rounded px-2 py-1 text-base font-poppins ${inputClassName}`}
      aria-label={ariaLabel}
    />
  ) : (
    <span
      className={`cursor-pointer ${className}`}
      tabIndex={0}
      onClick={() => setEditing(true)}
      onKeyDown={e => (e.key === 'Enter' ? setEditing(true) : undefined)}
      aria-label={ariaLabel}
      role="textbox"
      aria-readonly={!editing}
    >
      {value}
    </span>
  );
};

export default EditableText;
