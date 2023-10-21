import Image from "next/image";
import React from "react";
import Profile from "@/public/images/profile.png";
import Cookies from "js-cookie";

const Headlines = ({
  modalState,
  handleModal,
}: {
  modalState: any;
  handleModal: any;
}) => {
  return (
    <center className='space-y-2 my-10'>
      <Image
        src={Profile}
        alt='profile'
        className='w-[12em] md:w-72 ml-10 md:ml-14'
      />
      <p className='text-base sm:text-lg text-dark/95 dark:text-light w-full'>
        Still looking for what to read?
      </p>
      <button
        onClick={() => {
          if (!Cookies.get("jwt")) {
            handleModal?.();
          }
        }}
        className='px-8 py-4 border-2 border-dashed rounded-md border-main2-brand text-dark/95 dark:text-light'
      >
        View our entire Libary
      </button>
    </center>
  );
};

export default Headlines;
