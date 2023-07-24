import React, { useState } from "react";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

import { ArrowDropDownOutlined, SearchOutlined } from "@mui/icons-material";
import ProfileImage from "@/public/images/profile.png";
import { MobileMenuDropdowns } from "./HeaderMenus";

export default function MobileHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountMenu, setAccountMenu] = useState<null | HTMLElement>(null);
  const [browse, setBrowse] = useState<null | HTMLElement>(null);
  const openModal = Boolean(accountMenu);
  const isBrowseOpen = Boolean(browse);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAccountMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAccountMenu(null);
  };

  const handleCloseBrowse = () => {
    setBrowse(null);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className='sticky top-0 right-0 flex items-center bg-main-brand text-light h-full w-full lg:hidden'>
      <div className='w-16 cursor-pointer' title='Beast Mood'>
        <Link href='/'>
          <Image src={Logo} alt='Logo' className='w-20 object-scale-down' />
        </Link>
      </div>
      <div className='w-full flex items-center justify-end'>
        <div className='flex items-center space-x-5'>
          <SearchOutlined
            onClick={handleOpenModal}
            className='cursor-pointer'
            sx={{ fontSize: "1.6rem" }}
          />

          <div className='w-[0.1rem] h-8 bg-white'></div>
          <div
            className='flex items-center cursor-pointer'
            onClick={(e) => handleOpenMenu(e)}
          >
            <span
              className='w-8 h-8 border rounded-full overflow-hidden'
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
            <ArrowDropDownOutlined sx={{ fontSize: "1.6rem", color: "#fff" }} />
          </div>
          <div className='!ml-0'>
            <MobileMenuDropdowns
              accountMenu={accountMenu}
              handleCloseMenu={handleCloseMenu}
              handleCloseModal={handleCloseModal}
              openMenu={openModal}
              isModalOpen={isModalOpen}
              browseMenu={browse}
              isBrowseOpen={isBrowseOpen}
              handleOpenMenu={handleOpenMenu}
              handleCloseBrowse={handleCloseBrowse}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
