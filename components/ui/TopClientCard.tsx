import React, { useState } from 'react';
import Image from "next/image";
import OverviewSkeleton from "@/components/clients/overview/OverviewSkeleton";

const iconMap = {
  call: "/overview/phone-ringing.svg",
  email: "/overview/mail-send-envelope.svg",
  message: "/overview/chat-bubble-message.svg",
};

interface TopClientCardProps {
  displayClientName: string;
  selectedRow?: any;
}

const tabList = ['Overview', 'Projects', 'Payments', 'Meetings'];

const Overview = React.lazy(() => import("@/components/clients/overview/Overview"));
const Payments = React.lazy(() => import("@/components/clients/payments/Payments"));

const TopClientCard: React.FC<TopClientCardProps> = ({displayClientName, selectedRow}) => {
  const [activeTab, setActiveTab] = useState(tabList[0]);
  const [tabStack, setTabStack] = useState<string[]>([]);

  const handleTabChange = (tab: string) => {
    setTabStack(prev => [...prev, activeTab]);
    setActiveTab(tab);
  };
  const handleBackTab = () => {
    setActiveTab(tabStack.length > 0 ? tabStack[tabStack.length - 1] : 'Overview');
    setTabStack(prev => prev.slice(0, -1));
  };

  return (
    <section className="bg-white border border-[#E3DEFF] rounded-xl p-4 px-6 w-full mb-4">
      <div className="flex items-center justify-between border-b border-[#E3DEFF] gap-6 mb-8">
        <div className="flex gap-4 mb-2">
          <Image src="/comment_avatar.svg" alt="Profile" width={64} height={64} className="rounded-full border border-[#E3DEFF]" />
          <h2 className="flex text-2xl font-bold text-[#232323] items-center mb-1">{displayClientName}</h2>
        </div>
        <div className="flex-1 mb-2">
          <div className="flex gap-4 justify-end text-[#A09CB6] text-sm gap-12">
            <button className="flex items-center gap-1"><Image src={iconMap.call} alt="Call" width={18} height={18} />Call</button>
            <button className="flex items-center gap-1"><Image src={iconMap.email} alt="Email" width={18} height={18} />Email</button>
            <button className="flex items-center gap-1"><Image src={iconMap.message} alt="Message" width={18} height={18} />Message</button>
          </div>
        </div>
      </div>
      <div className="flex gap-12 justify-evenly mb-2 pb-2">
        {tabList.map(tab => (
          <div
            key={tab}
            className={`relative pb-2 cursor-pointer text-lg font-semibold transition-colors duration-300 ${activeTab === tab ? "text-[#232323]" : "text-[#A09CB6]"}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
            <div
              className={`absolute left-0 right-0 -bottom-[1px] h-[3px] rounded-t transition-all duration-300 ${activeTab === tab ? "bg-[#5A3EE6]" : "bg-transparent"}`}
              style={{ transitionProperty: 'background, width' }}
            />
          </div>
        ))}
      </div>
      <React.Suspense fallback={<div className="mt-8"><OverviewSkeleton /></div>}>
        {activeTab === 'Overview' && (
          <Overview selectedRow={selectedRow} deliverablesInProgress={0} scheduledMeetings={0} />
        )}
        {activeTab === 'Payments' && (
          <Payments selectedRow={selectedRow} onBack={handleBackTab} />
        )}
      </React.Suspense>
    </section>
  );
}

export default TopClientCard