type LeftButtonAndTextCardProps = {
    h1: string;
    button?: string;
}

const LeftButtonAndTextCard = ({h1, button}:LeftButtonAndTextCardProps)=>(
    <div className="flex items-center gap-8 min-w-[400px]">
        <h1 id="deliverables-heading" className="text-[20px] md:text-[22px] font-extrabold text-primary tracking-tight leading-tight">{h1}</h1>
        <button className="cursor-pointer bg-[#5a3ee6] hover:bg-[#6d52e1] transition-colors text-white px-7 py-2.5 rounded-[8px] font-semibold text-[15px] shadow-none min-w-[180px] h-[40px] flex items-center justify-center" aria-label="Create new deliverable">{button}</button>
    </div>
)

export default LeftButtonAndTextCard;