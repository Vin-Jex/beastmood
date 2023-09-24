import React from "react";

const MangaDetailsHeader = () => {
  return (
    <ul className='w-[1290px] flex items-center justify-center py-4 px-6 bg-[#FF5E03] border border-white shadow-[0px_4.18831px_16.75325px_0px_rgba(17,_34,_17,_0.05)] rounded-lg'>
      <li className='text-[#F4FAF8] text-base font-bold flex-1 border-r-2 text-center'>
        Favourites
      </li>
      <li className='text-[#F4FAF8] text-base font-bold flex-1 border-r-2 text-center'>
        My Lists
      </li>
      <li className='text-[#F4FAF8] text-base font-bold flex-1 border-r-2 text-center'>
        History
      </li>
      <li className='text-[#F4FAF8] text-base font-bold flex-1 border-r-2 text-center'>
        Notifications
      </li>
      <li className='text-[#F4FAF8] text-base font-bold flex-1 text-center'>
        My Account
      </li>
    </ul>
  );
};

export default MangaDetailsHeader;
