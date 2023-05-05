import React, { useEffect, useState } from "react";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDropDown,
  ArrowDropDownOutlined,
  BookmarkBorderOutlined,
  LightMode,
  ModeNight,
  SearchOutlined,
} from "@mui/icons-material";
import ProfileImage from "@/public/images/profile.png";
import { useTheme } from "next-themes";
import { DesktopMenuDropdowns } from "./HeaderMenus";

const navItems = [
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
];

export default function DesktopHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountMenu, setAccountMenu] = useState<null | HTMLElement>(null);
  const [browse, setBrowse] = useState<null | HTMLElement>(null);
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

  const openModal = Boolean(accountMenu);
  const isBrowseOpen = Boolean(browse);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAccountMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAccountMenu(null);
  };
  const handleBrowse = (event: React.MouseEvent<HTMLElement>) => {
    setBrowse(event.currentTarget);
  };
  const handleCloseBrowse = () => {
    setBrowse(null);
  };

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
    <nav className='sticky top-0 right-0 items-center px-4 bg-main-brand text-light h-full w-full hidden lg:flex'>
      <div className='w-16 cursor-pointer' title='Beast Mood'>
        <Link href='/'>
          <Image src={Logo} alt='Logo' className='w-20 object-scale-down' />
        </Link>
      </div>
      <div className='w-full flex items-center justify-between'>
        <ul className='block ml-10'>
          <li
            className='inline-block items-center cursor-pointer leading-5 px-5 capitalize text-base xl:text-lg'
            onClick={handleBrowse}
          >
            Browse <ArrowDropDown fontSize='medium' />
          </li>
          {navItems.map((navItem, index) => {
            return (
              <li
                key={index}
                className='inline-block leading-5 px-5 capitalize text-base xl:text-lg'
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
                    sx={{ fontSize: "2rem", color: "rgb(107 33 168)" }}
                  />
                ) : (
                  <ModeNight
                    className={`theme-btn__icon ${
                      addAnimate ? "animated" : ""
                    }`}
                    sx={{ fontSize: "2rem", color: "purple" }}
                  />
                )}
              </div>
            </div>
          </div>
          <SearchOutlined
            onClick={handleModal}
            className='cursor-pointer'
            sx={{ fontSize: "2rem" }}
          />
          <BookmarkBorderOutlined
            className='cursor-pointer'
            sx={{ fontSize: "2rem" }}
          />
          <div
            className='flex items-center cursor-pointer'
            onClick={handleOpenMenu}
          >
            <span
              className='w-10 h-10 border rounded-full overflow-hidden'
              title='Account Settings'
              aria-controls={openModal ? "account-menu" : undefined}
              aria-haspopup='true'
              aria-expanded={openModal ? "true" : undefined}
            >
              <Image
                className='object-cover'
                src={ProfileImage}
                alt='Profile'
              />
            </span>
            <ArrowDropDownOutlined
              sx={{ fontSize: "2rem", margin: 0, color: "#fff" }}
            />
          </div>
          <div className='!ml-0'>
            <DesktopMenuDropdowns
              accountMenu={accountMenu}
              handleCloseMenu={handleCloseMenu}
              handleCloseModal={handleCloseModal}
              openMenu={openModal}
              isModalOpen={isModalOpen}
              browseMenu={browse}
              isBrowseOpen={isBrowseOpen}
              handleCloseBrowse={handleCloseBrowse}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
