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
      <Image src={AuthBG} alt='Auth Background' className="mt-[6rem] -mr-[8rem]  -z-10" />

      <div className='w-full sm:w-[600px] flex flex-col items-center justify-center p-10 my-auto'>
        <div className='flex flex-col justify-center items-center mb-6'>
          <span className='xl:text-3xl lg:text-2xl md:text-xl text-lg text-main-brand leading-4 font-bold'>
            Log into your account
          </span>
          <p className='text-[#020202]/70 dark:text-light/70 text-sm'>
            Log into your BeastMood Account
          </p>
        </div>

        <form className='w-full px-12 mt-5 space-y-5'>
          <div className='space-y-5'>
            <div className='space-y-2'>
              <label
                htmlFor='email'
                className='text-dark dark:text-light text-base'
              >
                Email
              </label>
              <Input
                id='email'
                type='email'
                className='w-full p-4 rounded-md !outline-none bg-transparent !border-dark dark:!border-light/70'
                // showIcon={Visibility}
                // hideIcon={HideImageRounded}
                placeholder='Enter your email'
              />
            </div>
            <div className='space-y-2'>
              <label
                htmlFor='email'
                className='text-dark dark:text-light text-base px-1'
              >
                Password
              </label>
              <Input
                id='password'
                type='password'
                className='w-full p-4 rounded-md !outline-none bg-transparent !border-dark dark:!border-light/70'
                showIcon={VisibilityOutlined}
                hideIcon={VisibilityOffOutlined}
                placeholder='•••••••••••'
              />
            </div>
            <div className='flex justify-between items-center !my-7'>
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
              className='btn bg-main-brand disabled:bg-dark3 disabled:text-light4 text-white text-base py-4'
            >
              Login
            </Button>
          </div>

          <div className='w-full pt-4'>
            <Button
              type='submit'
              className='btn bg-transparent border-[2px] border-[#B5AFFF] disabled:bg-dark3 disabled:text-dark2 text-dark dark:text-light/70 text-base py-4'
            >
              Log in with Google
            </Button>
          </div>

          <div className='w-full flex items-center justify-center gap-1 text-lg'>
            <span className='text-gray-800 dark:text-light/90 text-sm'>
              Don&apos;t have an account?{" "}
            </span>
            <Link href='/' className='text-main-brand font-semibold text-sm'>
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
