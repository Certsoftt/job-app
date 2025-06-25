import React from 'react';

type RowCardProps = {
    children: React.ReactNode;
} 

const RowCard = ({children}:RowCardProps) => {
  return (
    <span className="flex-1 font-poppins font-normal text-sm text-[#232323] leading-6 text-center py-4 whitespace-nowrap overflow-hidden text-ellipsis">
          {children}
    </span>
  )
}

export default RowCard