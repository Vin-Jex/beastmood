import React, { useState } from "react";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import Modal from "../Molecules/Modal/Modal";
import Dropdown, { DropdownOption } from "../Molecules/DropDown";
import {
  BookmarkBorderOutlined,
  FormatListBulletedOutlined,
  HistoryOutlined,
  Logout,
  Message,
  SearchOutlined,
  Settings,
} from "@mui/icons-material";
import ProfileImage from "@/public/images/profile.png";
import { Menu, MenuItem } from "@mui/material";

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

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountMenu, setAccountMenu] = React.useState<null | HTMLElement>(
    null
  );
  const open = Boolean(accountMenu);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAccountMenu(event.currentTarget);
  };
  const handleClose = () => {
    setAccountMenu(null);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const dropdownOptions: DropdownOption[] = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  return (
    <div className='sticky top-0 right-0 flex items-center p-4 bg-main-brand text-light h-full w-full'>
      <div className='w-16 cursor-pointer' title='Beast Mood'>
        <Link href='/'>
          <Image src={Logo} alt='Logo' className='w-20 object-scale-down' />
        </Link>
      </div>
      <div className='w-full flex items-center justify-between'>
        <ul className='block ml-10'>
          {navItems.map((navItem, index) => {
            return (
              <li
                key={index}
                className='inline-block leading-5 px-5 capitalize text-lg'
              >
                <Link href='/'>{navItem.text}</Link>
              </li>
            );
          })}
        </ul>

        <div className='flex items-center space-x-5'>
          <SearchOutlined
            onClick={openModal}
            className='cursor-pointer'
            sx={{ fontSize: "2rem" }}
          />
          <BookmarkBorderOutlined
            className='cursor-pointer'
            sx={{ fontSize: "2rem" }}
          />
          <span
            className='w-10 h-10 border rounded-full overflow-hidden'
            onClick={handleClick}
            title='Account Settings'
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
          >
            <Image className='object-cover' src={ProfileImage} alt='Profile' />
          </span>
          <div>
            <div className=''>
              <Modal isOpen={isModalOpen} onClose={closeModal} title='Search' modalWidth='60rem'>
                <form action='' className='flex overflow-hidden'>
                  <input
                    type='search'
                    name='search'
                    id='search'
                    placeholder='Search'
                    className='p-4 pl-14 font-sans font-normal text-base rounded-md w-full text-dark outline-none'
                  />
                  <button
                    type='submit'
                    className='absolute top-[30%] left-6 rounded-t-md translate-y-1/2 py-4 px-3 cursor-pointer'
                  >
                    <SearchOutlined className='text-dark' />
                  </button>
                </form>
              </Modal>
            </div>

            <Menu
              anchorEl={accountMenu}
              id='account-menu'
              open={open}
              onClose={handleClose}
              onClick={handleClose}
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
                  <Image
                    className='object-cover '
                    src={ProfileImage}
                    alt='Profile'
                  />
                </span>
                <p className='text-[1.2rem] my-auto text-white'>Beastmood</p>
              </div>
              <MenuItem onClick={handleClose} className='menuItems'>
                <BookmarkBorderOutlined />
                <span>Favourite</span>
              </MenuItem>
              <MenuItem onClick={handleClose} className='menuItems'>
                <FormatListBulletedOutlined />
                <span>My lists</span>
              </MenuItem>
              <MenuItem onClick={handleClose} className='menuItems mb-2'>
                <HistoryOutlined />
                <span>History</span>
              </MenuItem>
              <MenuItem onClick={handleClose} className='menuItems'>
                <Message fontSize='small' />
                <span>notifications</span>
              </MenuItem>
              <MenuItem onClick={handleClose} className='menuItems mb-2'>
                <Settings fontSize='small' />
                <span>my account</span>
              </MenuItem>
              <MenuItem onClick={handleClose} className='menuItems'>
                <Logout fontSize='small' />
                <span>Logout</span>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
