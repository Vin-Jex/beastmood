import React, { ReactNode } from "react";

const Empty = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col items-center justify-center w-[1290px] h-[581px] gap-[20px] border-[3px] border-dashed border-[#FF5E03] mx-auto'>
      {children}
    </div>
  );
};

export default Empty;
