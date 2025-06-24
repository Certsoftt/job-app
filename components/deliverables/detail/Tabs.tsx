import React from "react";

interface Tab {
  label: string;
  id: string;
  hasDot?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div
      role="tablist"
      aria-label="Detail Tabs"
      className="flex items-center border-b border-[#C6B9F6] rounded-t-xl bg-[#F7F5FF] px-4 pt-2"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`tabpanel-${tab.id}`}
          id={`tab-${tab.id}`}
          tabIndex={activeTab === tab.id ? 0 : -1}
          className={`relative px-8 py-3 text-base font-semibold font-poppins focus:outline-none transition-colors rounded-t-xl border-none bg-transparent ${
            activeTab === tab.id
              ? "text-[#5B2EDD] bg-white shadow-none border-none outline-none"
              : "text-[#A09CB6] bg-transparent"
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
          {tab.hasDot && (
            <span className="ml-2 inline-block w-2 h-2 bg-[#5B2EDD] rounded-full align-middle"></span>
          )}
          {activeTab === tab.id && (
            <span
              className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[40px] h-[4px] bg-[#5B2EDD] rounded-t-full"
              style={{ bottom: "-2px" }}
            ></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
