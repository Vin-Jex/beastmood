import React from "react";
import Input from "../Molecules/Input/Input";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import Link from "next/link";
import Button from "../Molecules/Input/Button";
import AuthBG from "@/public/images/authbg.png";
import Image from "next/image";

export default function Login() {
  return (
    <div className='flex justify-center items-center h-screen overflow-hidden'>
      <Image
        src={AuthBG}
        alt='Auth Background'
        className='mt-[4rem] -mr-[8rem] -z-10 hidden md:block'
      />

      <div className='w-full sm:w-[600px] flex flex-col items-start md:items-center justify-center p-6 md:p-10 my-auto'>
        <div className='flex flex-col justify-center items-start md:items-center mb-4'>
          <span className='xl:text-3xl lg:text-2xl md:text-xl text-lg text-main-brand leading-4 font-bold hidden md:block'>
            Log into your account
          </span>
          <span className='text-2xl text-main-brand leading-4 font-bold block md:hidden'>
            Login
          </span>
          <p className='text-[#020202]/70 dark:text-light/70 text-sm mt-2.5'>
            Log into your BeastMood Account
          </p>
        </div>

        <form className='w-full md:px-12 mt-4 space-y-3'>
          <div className='space-y-3'>
            <div className='space-y-1'>
              <label
                htmlFor='email'
                className='text-dark dark:text-light text-base'
              >
                Email
              </label>
              <Input
                id='email'
                type='email'
                className='input'
                // showIcon={Visibility}
                // hideIcon={HideImageRounded}
                placeholder='Enter your email'
              />
            </div>
            <div className='space-y-1'>
              <label
                htmlFor='email'
                className='text-dark dark:text-light text-base px-1'
              >
                Password
              </label>
              <Input
                id='password'
                type='password'
                className='input'
                showIcon={VisibilityOutlined}
                hideIcon={VisibilityOffOutlined}
                placeholder='•••••••••••'
              />
            </div>
            <div className='flex justify-between items-center !my-4'>
              <div className='customCheckbox'>
                <input
                  type='checkbox'
                  id='rememberMe'
                  className='bg-transparent border-dark dark:border-light'
                />
                <label
                  htmlFor='rememberMe'
                  className='text-gray-800 dark:text-light text-sm'
                >
                  Remember me
                </label>
              </div>
              <span className='text-main-brand text-sm'>
                <Link href='/auth/forget-password'>Forget Password?</Link>
              </span>
            </div>
            <Button
              type='submit'
              className='btn bg-main-brand disabled:bg-dark3 disabled:text-light4 text-white text-[.9rem] py-3 hover:scale-[.98] transition-all ease-in-out duration-300'
            >
              Login
            </Button>
          </div>

          <div className='w-full pt-2'>
            <Button
              type='button'
              className='btn bg-transparent border-[2px] border-[#B5AFFF] disabled:bg-dark3 disabled:text-dark2 text-dark dark:text-light/70 text-[.9rem] py-3 hover:scale-[.98] transition-all ease-in-out duration-300'
            >
              Log in with Google
            </Button>
          </div>

          <div className='w-full flex items-center justify-center gap-1 text-lg'>
            <span className='text-gray-800 dark:text-light/90 text-sm'>
              Don&apos;t have an account?{" "}
            </span>
            <Link
              href='/auth/account/ac648c1c846a008ea7d6631505'
              className='text-main-brand font-semibold text-sm'
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
