import { useEffect, useState } from "react";
import {
  BookmarkBorderOutlined,
  FormatListBulletedOutlined,
  HistoryOutlined,
  LightMode,
  Logout,
  Message,
  ModeNight,
  SearchOutlined,
  Settings,
} from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import ProfileImage from "@/public/images/profile.png";
import Modal from "../Molecules/Modal/Modal";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MobileMenuType } from "@/Schema/Header/types";

export const MobileMenuDropdowns: React.FC<MobileMenuType> = ({
  openMenu,
  handleCloseMenu,
  handleCloseModal: closeModal,
  handleCloseBrowse,
  handleOpenMenu,
  accountMenu,
  isModalOpen,
  isBrowseOpen,
  browseMenu,
}) => {
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

  const currentTheme = theme === "system" ? "systemTheme" : theme;
  const themeColorToggle = themeColor ? "light" : "dark";

  const handletoggle = () => {
    setAddAnimate(true);

    setTimeout(() => {
      setAddAnimate(false);
    }, 500);
  };
  const navItems = {
    links: [
      {
        text: "home",
      },
      {
        text: "blog",
      },
      {
        text: "anime",
      },
      {
        text: "community",
      },
    ],
    menu1: [
      {
        text: "favourite",
        icon: BookmarkBorderOutlined,
      },
      {
        text: "my lists",
        icon: FormatListBulletedOutlined,
      },
      {
        text: "history",
        icon: HistoryOutlined,
      },
    ],
    menu2: [
      {
        text: "notifications",
        icon: Message,
      },
      {
        text: "my account",
        icon: Settings,
      },
    ],
    menu3: [
      {
        text: "logout",
        icon: Logout,
      },
    ],
  };
  return (
    <div>
      <>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
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

      <Menu
        anchorEl={accountMenu}
        id='account-menu'
        open={openMenu}
        onClose={handleCloseMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            backgroundColor: "#FF5E03",
            padding: "0.3em",
            width: "21rem",
            color: "#FFFFFF",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1,
            maxHeight: "30rem",

            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 15,
              width: 10,
              height: 10,
              bgcolor: "#FF5E03",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        className='visible lg:hidden'
      >
        <div className='flex items-center justify-between px-4 pt-2 pb-6'>
          <div className='flex items-center space-x-3'>
            <span className='border w-8 h-8 rounded-full overflow-hidden'>
              <Image
                className='object-cover'
                src={ProfileImage}
                alt='Profile'
              />
            </span>
            <p className='text-[1rem] my-auto text-white'>Beastmood</p>
          </div>
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
        </div>

        <ul className='flex flex-col my-0'>
          {navItems.links.map((navItem, index) => {
            return (
              <li
                onClick={handleCloseMenu}
                key={index}
                className='block leading-5 px-5 py-1.5 capitalize text-[.9rem]'
              >
                <Link href='/'>{navItem.text}</Link>
              </li>
            );
          })}
        </ul>

        <hr className='h-0.5 w-full bg-[#434242] border-none my-4' />

        <div className='gap-y-0'>
          {navItems.menu1.map(({ text, icon: Icon }, index) => {
            return (
              <Link
                href={`/account/${text}`}
                key={index}
                onClick={handleCloseMenu}
                className='flex items-center space-x-2 py-4 !my-0 capitalize font-montserrat'
              >
                <Icon className='text-[1rem] leading-[0px]' />
                <span className='text-[.9rem] leading-[0px] text-light'>
                  {text}
                </span>
              </Link>
            );
          })}
        </div>

        <hr className='h-0.5 w-full bg-[#434242] border-none my-4' />

        <div className='gap-y-0'>
          {navItems.menu2.map(({ text, icon: Icon }, index) => {
            return (
              <Link
                href={`/account/${text}`}
                key={index}
                onClick={handleCloseMenu}
                className='flex items-center space-x-2 py-4 !my-0 capitalize font-montserrat'
              >
                <Icon className='text-[1rem] leading-[0px]' />
                <span className='text-[.9rem] leading-[0px] text-light'>
                  {text}
                </span>
              </Link>
            );
          })}
        </div>

        <hr className='h-0.5 w-full bg-[#434242] border-none my-4' />
        <div className='gap-y-0'>
          {navItems.menu3.map(({ text, icon: Icon }, index) => {
            return (
              <MenuItem
                key={index}
                onClick={handleCloseMenu}
                className='flex items-center space-x-2 !py-4 !my-0 capitalize font-montserrat'
              >
                <Icon className='text-[1rem]  leading-[0px]' />
                <span className='text-[.9rem] leading-[0px] text-light'>
                  {text}
                </span>
              </MenuItem>
            );
          })}
        </div>
      </Menu>
    </div>
  );
};
