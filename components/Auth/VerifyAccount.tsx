import React, { useState } from "react";
import Button from "../Molecules/Input/Button";
import Image from "next/image";
import VeriPic from "@/public/images/Group 1199.png";
import { Close, KeyboardArrowLeft } from "@mui/icons-material";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Collapse, IconButton } from "@mui/material";

const VerifyAccount = () => {
  const router = useRouter();
  const [message, setMessage] = useState("message");
  const [showMessage, setShowMessage] = useState(false);

  const resendMail = async () => {
    try {
      const response = await fetch(
        "https://api.beastmoodsee.com/api/v1/resend",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
          body: JSON.stringify({ identifier: Cookies.get("email") }),
        }
      );

      if (!response.ok) {
        const responseData = await response.json();
        console.log("Verification email not resent.", responseData);
        setMessage(responseData?.message || "Verification email not sent.");
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 4000);
      } else {
        const responseData = await response.json();
        setMessage(
          responseData?.message || "Verification email resent successfully."
        );
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 4000);
        console.log("Verification email sent successfully");
      }
    } catch (error) {
      console.log("ERROR: " + error);

      console.log("Verification email failed");
    }
  };

  return (
    <div className='flex justify-center items-center h-screen overflow-hidden'>
      <div className='absolute top-24 right-12'>
        <Collapse in={showMessage}>
          <Alert
            action={
              <IconButton
                aria-label='close'
                color='inherit'
                size='small'
                onClick={() => {
                  setShowMessage(false);
                }}
              >
                <Close fontSize='inherit' />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {message}
          </Alert>
        </Collapse>
      </div>
      <div className='w-full sm:w-[600px] flex flex-col items-center justify-center px-6 py-6 sm:p-8 md:p-10 my-auto gap-y-[53px]'>
        <Image
          src={VeriPic}
          alt='VeriPic Picture'
          className='-z-10 w-[231px] h-[198px] hidden md:block mx-auto object-scale-down'
        />
        <form
          className='w-full px-0 sm:px-4 md:px-12 mt-4 space-y-4'
          // onSubmit={handleSubmit}
        >
          <div className='flex flex-col justify-center'>
            <span
              className='flex items-center font-montserrat font-medium text-[14px] my-3 cursor-pointer'
              onClick={() => {
                router.push("/auth/login");
              }}
            >
              <KeyboardArrowLeft />
              Back to login
            </span>
            <h4 className='flex items-center font-montserrat font-bold text-[32px]'>
              Verify code
            </h4>
            <p className='text-black/70 dark:text-white/70'>
              An authentication code has been sent to your email.
            </p>
            <p className='text-black/70 dark:text-white/70 text-[14px]'>
              Didn&apos;t get the email? Check your spam folder.
            </p>
          </div>
          <Button
            type='button'
            className='btn mx-auto min-h-[55px] bg-main-brand disabled:bg-main-brand disabled:text-light4 text-white text-[.79rem] sm:text-[.9rem] px-8 !py-2 !mt-12 hover:scale-[.98] transition-all ease-in-out duration-300 uppercase relative !cursor-pointer'
            onClick={resendMail}
          >
            Resend Verification
          </Button>
        </form>
      </div>
    </div>
  );
};

export default VerifyAccount;
