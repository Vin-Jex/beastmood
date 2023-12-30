import { ArrowDownwardOutlined } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

interface PropTypes {
  volume: string | number;
  date: string;
  id: string | string[];
  host_name: string | string[];
  chapter_url: string;
}

const Chapters: React.FC<PropTypes> = ({
  volume,
  id,
  host_name,
  chapter_url,
  date,
  ...buttonProp
}) => {
  return (
    <div className='flex justify-between items-center w-full'>
      <span className='flex flex-col justify-center'>
        <span className='font-bold text-sm md:text-lg text-black capitalize'>
          {volume}
        </span>
        <span className='text-sm text-black capitalize'>{date}</span>
      </span>
      <Link
        href='/mangas/[mangaId]/[host_name]/[chapter_url]/'
        as={`/mangas/${id}/${host_name}/${id}?url=${chapter_url}`}
        className='flex flex-col items-center justify-center w-8 h-8 rounded-full bg-main2-brand text-black'
      >
        <ArrowDownwardOutlined {...buttonProp} className='text-[1.2rem]' />
      </Link>
    </div>
  );
};

export default Chapters;
