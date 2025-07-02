import React from 'react';
import Image from "next/image";

const iconMap = {
  call: "/overview/phone-ringing.svg",
  email: "/overview/mail-send-envelope.svg",
  message: "/overview/chat-bubble-message.svg",
};

interface TopClientCardProps {
  displayClientName: string;
}


const TopClientCard: React.FC<TopClientCardProps> = ({displayClientName}) => {
  return (
    <section className="bg-[#F8F6FF] border border-[#E3DEFF] rounded-xl p-4 w-full mb-8">
        <div className="flex items-center justify-between border-b border-[ #E3DEFF] gap-6 mb-8">
            <div className="flex gap-4">
            <Image src="/comment_avatar.svg" alt="Profile" width={64} height={64} className="rounded-full border border-[#E3DEFF]" />
            <h2 className="flex text-2xl font-bold text-[#232323] items-center mb-1">{displayClientName}</h2>
            </div>
            <div className="flex-1">
            <div className="flex gap-4 justify-end text-[#A09CB6] text-sm gap-8">
                <button className="flex items-center gap-1"><Image src={iconMap.call} alt="Call" width={18} height={18} />Call</button>
                <button className="flex items-center gap-1"><Image src={iconMap.email} alt="Email" width={18} height={18} />Email</button>
                <button className="flex items-center gap-1"><Image src={iconMap.message} alt="Message" width={18} height={18} />Message</button>
            </div>
            </div>
        </div>
        <div className="flex gap-12 mb-8 pb-8">
            {['Overview', 'Projects', 'Payments', 'Meetings'].map(tab => (
            <div key={tab} className="relative pb-2 cursor-pointer text-lg font-semibold text-[#232323] opacity-90">
                {tab}
                {/* TODO: Add tab state logic */}
                {tab === 'Overview' && <div className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-[ #5A3EE6] rounded-t" />}
            </div>
            ))}
        </div>
    </section>
  )
}

export default TopClientCard