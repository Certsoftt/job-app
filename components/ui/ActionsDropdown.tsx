"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
// import { usePathname } from "next/navigation";

export interface ActionsDropdownItem {
  label: string;
  icon: string;
  colorClass?: string;
  disabled?: boolean;
  onClick: () => void;
}

interface ActionsDropdownProps {
  items: ActionsDropdownItem[];
  placement?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  triggerClassName?: string;
  menuClassName?: string;
}

const placementStyles: Record<string, string> = {
  "bottom-right": "right-0 top-10",
  "bottom-left": "left-0 top-10",
  "top-right": "right-0 bottom-10",
  "top-left": "left-0 bottom-10",
};

const ActionsDropdown: React.FC<ActionsDropdownProps> = ({
  items,
  placement = "bottom-right",
  triggerClassName = "",
  menuClassName = "",
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Focus first item on open
  useEffect(() => {
    if (open && menuRef.current) {
      const first = menuRef.current.querySelector("button:not(:disabled)");
      if (first) (first as HTMLButtonElement).focus();
    }
  }, [open]);

  // Keyboard navigation for menu items
  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const focusable = menuRef.current?.querySelectorAll("button:not(:disabled)");
    if (!focusable || focusable.length === 0) return;
    const current = document.activeElement;
    let idx = Array.from(focusable).indexOf(current as Element);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      idx = (idx + 1) % focusable.length;
      (focusable[idx] as HTMLButtonElement).focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      idx = (idx - 1 + focusable.length) % focusable.length;
      (focusable[idx] as HTMLButtonElement).focus();
    }
  };

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        aria-label="More actions"
        className={`flex items-center justify-center w-8 h-8 rounded hover:bg-grey-300 focus:outline-none focus:ring-2 focus:ring-primary ${triggerClassName}`}
        tabIndex={0}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="sr-only">More actions</span>
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
          <circle cx="4" cy="10" r="2" fill="#232427" />
          <circle cx="10" cy="10" r="2" fill="#232427" />
          <circle cx="16" cy="10" r="2" fill="#232427" />
        </svg>
      </button>
      {open && (
        <div
          ref={menuRef}
          className={`absolute z-30 bg-white border border-[#E3DEFF] rounded-lg shadow-lg min-w-[160px] py-2 flex flex-col divide-y divide-[#E3DEFF] ${placementStyles[placement]} ${menuClassName}`}
          tabIndex={-1}
          onKeyDown={handleMenuKeyDown}
        >
          {items.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-2 px-4 py-3 font-poppins font-medium text-base hover:bg-[#F7F5FF] focus:outline-none ${item.colorClass || "text-[#5B2EDD]"} ${item.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => {
                if (!item.disabled) {
                  item.onClick();
                  setOpen(false);
                }
              }}
              tabIndex={0}
              disabled={item.disabled}
            >
              <Image src={item.icon} alt={item.label} width={18} height={18} />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActionsDropdown;
