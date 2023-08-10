import React, { useEffect, useState } from "react";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import ProfileImage from "@/public/images/profile.png";
import { useTheme } from "next-themes";
import Modal from "../Molecules/Modal/Modal";
import { DesktopAccountMenuData, browserItems, navItems } from "../datas";
import {
  BookmarkBorderOutlined,
  KeyboardArrowDown,
  LightMode,
  ModeNight,
  SearchOutlined,
} from "@mui/icons-material";

export default function DesktopHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [addAnimate, setAddAnimate] = useState(false);
  const [themeColor, setThemeColor] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const currentTheme = theme === "system" ? "systemTheme" : theme;
  const themeColorToggle = themeColor ? "light" : "dark";

  const handletoggle = () => {
    setAddAnimate(true);

    setTimeout(() => {
      setAddAnimate(false);
    }, 500);
  };

  return (
    <nav className='hidden lg:flex items-center px-4 h-full w-full '>
      <div className='w-16 cursor-pointer' title='Beast Mood'>
        <Link href='/'>
          <Image src={Logo} alt='Logo' className='w-16 object-scale-down' />
        </Link>
      </div>
      <div className='w-full flex items-center justify-between'>
        <ul className='block ml-10'>
          <div className='inline-block group relative'>
            <li className='inline-block items-center cursor-pointer leading-5 px-5 capitalize text-base text-light hover:text-gray-100/95'>
              category
              <KeyboardArrowDown className='mt-0 group-hover:-rotate-180 group-hover:mt-0.5 transition ease-in-out duration-300' />
            </li>

            <div className='absolute top-[2rem] left-0 hidden group-hover:md:block hover:md:block bg-[#FF5E03] text-white w-[50rem] animate-fade-in  overflow-visible shadow-[0px_10px_80px_rgba(0,_0,_0,_0.32)] rounded-md'>
              <div className='-mt-[.45rem]'>
                <div
                  className='w-5 h-5 left-[1rem] absolute 
                   bg-[#FF5E03] rotate-45'
                ></div>
              </div>

              <div className='flex justify-between px-4 py-8 h-full divide-x-2'>
                <ul className='flex flex-wrap items-center justify-start flex-[100%] w-full gap-y-6 pl-12'>
                  {browserItems.genres.map((data, index) => {
                    return (
                      <li
                        key={index}
                        className='capitalize w-[50%] !justify-items-start !text-left text-sm font-medium text-light'
                      >
                        <Link href={data.link}>
                          {data.text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* <div className='h-full w-1 bg-[#434242] border-none'>l</div> */}

                <ul className='flex flex-wrap items-center justify-start flex-[100%] w-full gap-y-6 pl-20'>
                  {browserItems.genres2.map((data, index) => {
                    return (
                      <li
                        key={index}
                        className='capitalize w-[50%] text-sm font-medium text-light'
                      >
                        <Link href={data.link}>
                          {data.text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          {navItems.map((navItem, index) => {
            return (
              <li
                key={index}
                className='inline-block leading-5 px-5 capitalize text-base text-light hover:text-gray-100/95'
              >
                <Link href='/'>{navItem.text}</Link>
              </li>
            );
          })}
        </ul>

        <div className='flex items-center space-x-5 cursor-pointer'>
          <div
            onClick={() => {
              handletoggle();
              setThemeColor(!themeColor);
              setTheme(themeColorToggle);
            }}
            className='theme-btn'
          >
            <div className='theme-btn__indicator'>
              <div className='theme-btn__icon-container'>
                {currentTheme !== "dark" ? (
                  <LightMode
                    className={`theme-btn__icon ${
                      addAnimate ? "animated" : ""
                    }`}
                  />
                ) : (
                  <ModeNight
                    className={`theme-btn__icon ${
                      addAnimate ? "animated" : ""
                    }`}
                  />
                )}
              </div>
            </div>
          </div>

          <SearchOutlined
            onClick={handleModal}
            className='cursor-pointer'
            sx={{ fontSize: "1.7rem" }}
          />

          <BookmarkBorderOutlined
            className='cursor-pointer'
            sx={{ fontSize: "1.7rem" }}
          />

          {/* Account Menu */}
          <div className='group relative'>
            <div className='flex items-center cursor-pointer'>
              <span
                className='w-9 h-9 border rounded-full overflow-hidden'
                title='Account Settings'
              >
                <Image
                  className='object-cover'
                  src={ProfileImage}
                  alt='Profile'
                />
              </span>
              <KeyboardArrowDown
                className='mt-0 group-hover:-rotate-180 group-hover:mt-0.5 transition ease-in-out duration-300'
                sx={{ fontSize: "1.8rem", marginTop: "0.3rem", color: "#fff" }}
              />
            </div>

            {/* Popover menu */}
            <div className='absolute top-[2.9rem] right-0 hidden group-hover:md:block hover:md:block bg-[#FF5E03] text-white w-[22rem]  animate-fade-in  overflow-visible shadow-[0px_10px_80px_rgba(0,_0,_0,_0.32)] rounded-md'>
              <div className='-mt-[.45rem]'>
                <div
                  className='w-5 h-5 right-[2rem] absolute 
                   bg-[#FF5E03] rotate-45'
                ></div>
              </div>
              <div className='px-6 py-8'>
                <div className='flex items-center space-x-3 pb-4 my-auto'>
                  <span className='w-10 h-10 border rounded-full overflow-hidden'>
                    <Image
                      className='object-cover '
                      src={ProfileImage}
                      alt='Profile'
                    />
                  </span>
                  <p className='text-[1.1rem] text-white mt-1'>Beastmood</p>
                </div>
                {DesktopAccountMenuData.map(({ text, icon: Icon }, index) => {
                  return (
                    <div
                      key={index}
                      className={`menuItems !text-white hover:!text-gray-200 py-3 last:!pb-0 ${
                        text === "history" || text === "my account"
                          ? "!mb-4"
                          : ""
                      }`}
                    >
                      <Icon />
                      <span>{text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* Search Modal */}
        <>
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            title='Search'
            modalWidth='60rem'
          >
            <form className='flex overflow-hidden'>
              <input
                type='search'
                name='search'
                id='search'
                placeholder='Search'
                className='p-4 pl-14 font-montserrat font-normal text-base rounded-md w-full text-dark dark:text-white placeholder:dark:text-white outline-none bg-gray-200 dark:bg-gray-700'
              />
              <button
                type='submit'
                className='absolute top-[30%] left-6 rounded-t-md translate-y-1/2 py-4 px-3 cursor-pointer'
              >
                <SearchOutlined className='text-dark dark:text-white' />
              </button>
            </form>
          </Modal>
        </>
      </div>
    </nav>
  );
}
