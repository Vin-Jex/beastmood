import React, { useState } from "react";

const navItems = [
  {
    title: "Favourite",
  },
  {
    title: "My Lists",
  },
  {
    title: "History",
  },
  {
    title: "Notifications",
  },
  {
    title: "My Account",
  },
];

const MangaDetailsHeader = ({
  activeNav,
  setActiveNav,
}: {
  activeNav: string;
  setActiveNav: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const itemsToRender = navItems.slice(0, -1);

  return (
    <ul className='w-[1290px] flex items-center justify-center bg-[#FF5E03] border-b-[0.5px] border-white shadow-[0px_4.18831px_16.75325px_0px_rgba(17,_34,_17,_0.05)] rounded-lg overflow-hidden'>
      {itemsToRender.map((item) => {
        return (
          <li
            className={`relative py-4 border-b-4 rounded-sm ${
              activeNav === item.title && "!border-yellow-400"
            } border-transparent w-full h-full`}
            key={item.title}
            onClick={() => setActiveNav(item.title)}
          >
            <div className='text-[#F4FAF8] text-base font-bold border-r-2 w-full pl-4'>
              <span className=''>{item.title}</span>
            </div>
          </li>
        );
      })}
      <li
        onClick={() => setActiveNav(navItems[navItems.length - 1].title)}
        className={`px-4 py-4 border-b-4 rounded-sm duration-300 transition ${
          activeNav === navItems[navItems.length - 1].title &&
          "!border-yellow-400"
        } border-transparent w-full`}
      >
        <div className='text-[#F4FAF8] text-base font-bold w-full'>
          {navItems[navItems.length - 1].title}
        </div>
      </li>
    </ul>
  );
};

export default MangaDetailsHeader;
