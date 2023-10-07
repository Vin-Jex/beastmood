import Empty from "@/components/Atoms/Empty";
import MangaDetailsHeader from "@/components/Atoms/MangaDetailsHeader";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import React, { useState } from "react";
import Profile from "@/public/images/profile.png";
import AccountImage from "@/public/images/account.png";

const MangaDetails = () => {
  const [activeNav, setActiveNav] = useState("Favourite");

  return (
    <Layout>
      <header className='flex items-center justify-center my-14'>
        <MangaDetailsHeader setActiveNav={setActiveNav} activeNav={activeNav} />
      </header>

      <div className='px-[75px]'>
        <Empty>
          <Image
            src={activeNav !== "My Account" ? Profile : AccountImage}
            alt='profile'
            className='w-[12em] md:w-72 ml-10 md:ml-14'
          />
          <p className='text-base sm:text-lg text-dark/95 dark:text-light w-full text-center'>
            You don’t have any
            {activeNav.split(" ").length > 1
              ? activeNav.split(" ")[1].toLowerCase()
              : activeNav.toLowerCase()}
            yet
          </p>
          {activeNav !== "My Account" && (
            <button className='px-8 py-4 bg-[#FF5E03] rounded-md text-dark/95 dark:text-light capitalize'>
              Add
              {activeNav.split(" ").length > 1
                ? activeNav.split(" ")[1].toLowerCase()
                : activeNav.toLowerCase()}
            </button>
          )}
        </Empty>
      </div>
    </Layout>
  );
};

export default MangaDetails;
