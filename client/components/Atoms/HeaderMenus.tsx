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

interface DesktopMenuType {
  openMenu: boolean;
  accountMenu: null | HTMLElement;
  isModalOpen: boolean;
  handleCloseMenu?: () => void;
  handleCloseModal: () => void;
  handleCloseBrowse?: () => void;
  isBrowseOpen: boolean;
  browseMenu: null | HTMLElement;
}
interface MobileMenuType {
  openMenu: boolean;
  accountMenu: null | HTMLElement;
  isModalOpen: boolean;
  handleCloseMenu?: () => void;
  handleCloseModal: () => void;
  handleCloseBrowse?: () => void;
  isBrowseOpen: boolean;
  browseMenu: null | HTMLElement;
}

export const DesktopMenuDropdowns: React.FC<DesktopMenuType> = ({
  openMenu,
  handleCloseMenu,
  handleCloseModal: closeModal,
  handleCloseBrowse,
  accountMenu,
  isModalOpen,
  isBrowseOpen,
  browseMenu,
}) => {
  const accountMenuData = [
    {
      icon: BookmarkBorderOutlined,
      text: "favourite",
    },
    {
      icon: FormatListBulletedOutlined,
      text: "my list",
    },
    {
      icon: HistoryOutlined,
      text: "history",
    },
    {
      icon: Message,
      text: "notifications",
    },
    {
      icon: Settings,
      text: "my account",
    },
    {
      icon: Logout,
      text: "logout",
    },
  ];

  return (
    <>
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
              className='p-4 pl-14 font-sans font-normal text-base rounded-md w-full text-dark dark:text-white placeholder:dark:text-white outline-none bg-gray-200 dark:bg-gray-700'
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

      {/* Search Modal */}
      <Menu
        anchorEl={accountMenu}
        id='account-menu'
        open={openMenu}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            backgroundColor: "#FF5E03",
            width: "21rem",
            color: "#FFFFFF",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,

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
      >
        <div className='flex items-center space-x-3 px-4 pt-4 pb-6'>
          <span className='border w-10 h-10 rounded-full overflow-hidden'>
            <Image className='object-cover ' src={ProfileImage} alt='Profile' />
          </span>
          <p className='text-[1.2rem] my-auto text-white'>Beastmood</p>
        </div>
        {accountMenuData.map(({ text, icon: Icon }, index) => {
          return (
            <MenuItem
              key={index}
              onClick={handleCloseMenu}
              className={`menuItems ${
                text === "history" || text === "my account" ? "!mb-4" : ""
              }`}
            >
              <Icon />
              <span>{text}</span>
            </MenuItem>
          );
        })}
      </Menu>

      {/* Browse Menu */}
      <Menu
        anchorEl={browseMenu}
        id='account-menu'
        open={isBrowseOpen}
        onClose={handleCloseBrowse}
        onClick={handleCloseBrowse}
        PaperProps={{
          elevation: 0,
          sx: {
            backgroundColor: "#FF5E03",
            width: "21rem",
            color: "#FFFFFF",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,

            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 170,
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
      >


        {accountMenuData.map(({ text, icon: Icon }, index) => {
          return (
            <MenuItem
              key={index}
              onClick={handleCloseBrowse}
              className={`menuItems ${
                text === "history" || text === "my account" ? "!mb-4" : ""
              }`}
            >
              <span>{text}</span>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export const MobileMenuDropdowns: React.FC<MobileMenuType> = ({
  openMenu,
  handleCloseMenu,
  handleCloseModal: closeModal,
  handleCloseBrowse,
  accountMenu,
  isModalOpen,
  isBrowseOpen,
  browseMenu,
}) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [addAnimate, setAddAnimate] = useState(false);
  const [themeColor, setThemeColor] = useState(true);
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
              className='p-4 pl-14 font-sans font-normal text-base rounded-md w-full text-dark dark:text-white placeholder:dark:text-white outline-none bg-gray-200 dark:bg-gray-700'
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
            padding: "0.5em",
            width: "21rem",
            color: "#FFFFFF",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,

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
      >
        <div className='flex items-center justify-between px-4 pt-4 pb-6'>
          <div className='flex items-center space-x-3'>
            <span className='border w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden'>
              <Image
                className='object-cover'
                src={ProfileImage}
                alt='Profile'
              />
            </span>
            <p className='text-[1rem] md:text-[1.2rem] my-auto text-white'>Beastmood</p>
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

        <ul className='flex flex-col !my-3'>
          {navItems.map((navItem, index) => {
            return (
              <li
                key={index}
                className='block leading-5 px-5 py-2.5 capitalize text-[1.05rem]'
              >
                <Link href='/'>{navItem.text}</Link>
              </li>
            );
          })}
        </ul>

        <hr />

        <MenuItem onClick={handleCloseMenu} className='menuItems !mt-4'>
          <BookmarkBorderOutlined />
          <span>Favourite</span>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} className='menuItems'>
          <FormatListBulletedOutlined />
          <span>My lists</span>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} className='menuItems !mb-4'>
          <HistoryOutlined />
          <span>History</span>
        </MenuItem>

        <hr />
        <MenuItem onClick={handleCloseMenu} className='menuItems !mt-4'>
          <Message fontSize='small' />
          <span>notifications</span>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu} className='menuItems !mb-4'>
          <Settings fontSize='small' />
          <span>my account</span>
        </MenuItem>
        <hr />
        <MenuItem onClick={handleCloseMenu} className='menuItems !my-2'>
          <Logout fontSize='small' />
          <span>Logout</span>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default function HeaderMenus(): React.ReactElement {
  return <div></div>;
}
