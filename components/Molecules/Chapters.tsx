import { ArrowDownwardOutlined } from "@mui/icons-material";
import React from "react";

interface PropTypes {
  volume: string | number;
  date: string;
}

const Chapters: React.FC<PropTypes> = ({ volume, date, ...buttonProp }) => {
  return (
    <div className='flex justify-between items-center w-full'>
      <span className='flex flex-col justify-center'>
        <span className='font-bold text-2xl text-black capitalize'>
          {volume || "Volume 1"}
        </span>
        <span className='text-sm text-black capitalize'>
          {date || "27th of Jun 2022"}
        </span>
      </span>
      <span className='flex flex-col items-center justify-center w-8 h-8 rounded-full bg-main2-brand text-black'>
        <ArrowDownwardOutlined {...buttonProp} className='text-[1.2rem]' />
      </span>
    </div>
  );
};

export default Chapters;
