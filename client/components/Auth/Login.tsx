import React from "react";
import Input from "../Molecules/Input/Input";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import Link from "next/link";
import Button from "../Molecules/Input/Button";

export default function Login() {
  return (
    <div className='flex justify-center items-center w-screen h-screen overflow-hidden'>
      <div className='w-1/2 flex flex-col items-center justify-center p-10'>
        <div className='flex flex-col justify-center items-center space-y-5 mb-10'>
          <span className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-main-brand leading-4 font-sans font-bold'>
            Login
          </span>
          <p className='text-dark md:text-xl text-lg'>
            Login to access your Beast Mood account
          </p>
        </div>

        <form className='w-full px-12 mt-5 space-y-5'>
          <div className='space-y-5'>
            <div>
              <label htmlFor='email' className='text-dark text-lg px-1'>
                Email
              </label>
              <Input
                id='email'
                type='email'
                className='w-full p-4 rounded-md !outline-none !border-dark'
                // showIcon={Visibility}
                // hideIcon={HideImageRounded}
                placeholder='Enter your email'
              />
            </div>
            <div>
              <label htmlFor='email' className='text-dark text-lg px-1'>
                Password
              </label>
              <Input
                id='password'
                type='password'
                className='w-full p-4 rounded-md !outline-none !border-dark'
                showIcon={VisibilityOutlined}
                hideIcon={VisibilityOffOutlined}
                placeholder='•••••••••••'
              />
            </div>
            <div className='flex justify-between items-center !my-7'>
              <div className='customCheckbox'>
                <input type='checkbox' id='rememberMe' />
                <label htmlFor='rememberMe' className='text-gray-800'>
                  Remember me
                </label>
              </div>
              <span className='text-main-brand'>
                <Link href='/auth/forget-password'>Forget Password?</Link>
              </span>
            </div>
            <Button
              type='submit'
              className='btn bg-main-brand disabled:bg-dark3 disabled:text-light4 text-white text-lg py-4'
            >
              Login
            </Button>
          </div>

          <div className='w-full pt-4'>
            <Button
              type='submit'
              className='btn bg-transparent border-[2px] border-[#B5AFFF] disabled:bg-dark3 disabled:text-dark2 text-dark text-lg py-4'
            >
              Log in with Google
            </Button>
          </div>

          <div className='w-full flex items-center justify-center gap-1 text-lg'>
            <span className='text-gray-800'>Don&apos;t have an account? </span>
            <Link href='/' className='text-main-brand font-semibold'>
              Sign Up
            </Link>
          </div>
        </form>
      </div>
      <div
        className={`w-1/2 bg-blue-300 h-full overscroll-none bg bg-no-repeat object-cover bg-cover`}
      ></div>
    </div>
  );
}
