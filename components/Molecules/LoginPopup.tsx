import React, { useState } from "react";
import ModalComponent from "./ModalComponent";
import Image from "next/image";
import AuthIllustration from "@/public/images/Group 1199.png";
import Button from "./Input/Button";
import { useRouter } from "next/router";

const LoginPopup = ({
  handleModal,
  modalState,
}: {
  handleModal: any;
  modalState: any;
}) => {
  const router = useRouter();
  return (
    <>
      <ModalComponent
        title=''
        handleModalClose={handleModal}
        modalOpen={modalState.openCategoryModal}
      >
        <div className='flex flex-col items-center justify-center gap-y-8 px-0 py-0 sm:px-2 md:px-4 sm:py-8 w-[320px] xs:w-[460px] sm:w-[490px] md:w-[653px] lg:w-[100%]'>
          <Image
            src={AuthIllustration}
            alt='Auth Illustration Picture'
            className='-z-10 w-[231px] h-[198px] mx-auto object-scale-down'
          />

          <div className='flex flex-col items-center justify-center'>
            <h4 className='text-center font-montserrat text-white/70 font-bold text-[23px] sm:text-[30px] md:text-[28px]'>
              Log in or Create Account
            </h4>
            <p className='text-center text-white/70 font-normal text-[13px] sm:text-[16px] md:text-[17px]'>
              Opps! you don’t have an account yet, Login or Create account to
              like, add Mangas and Comment
            </p>
          </div>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-y-2 sm:gap-5 w-full mt-1 md:mt-8'>
            <Button
              type='button'
              className='btn mx-auto min-h-[40px] sm:min-h-[48px] !w-full sm:w-[271px] bg-main-brand disabled:bg-main-brand disabled:text-light4 text-white text-[.79rem] sm:text-[.8rem] px-8 !py-2 hover:scale-[.98] transition-all ease-in-out duration-300 uppercase relative !cursor-pointer'
              onClick={() => {
                router.push("/auth/login");
              }}
            >
              LOG IN
            </Button>
            <Button
              type='button'
              className='btn mx-auto min-h-[40px] sm:min-h-[48px] !w-full sm:w-[260px] bg-main-brand disabled:bg-main-brand disabled:text-light4 text-white text-[.79rem] sm:text-[.9rem] px-8 !py-2 hover:scale-[.98] transition-all ease-in-out duration-300 uppercase relative !cursor-pointer whitespace-nowrap'
              onClick={() => {
                router.push("/auth/account/ac648c1c846a008ea7d6631505");
              }}
            >
              CREATE ACCOUNT
            </Button>
          </div>
        </div>
      </ModalComponent>
    </>
  );
};

export default LoginPopup;
