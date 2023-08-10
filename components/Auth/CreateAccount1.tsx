import React from "react";
import Input from "../Molecules/Input/Input";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import Link from "next/link";
import Button from "../Molecules/Input/Button";
import AuthBG from "@/public/images/authbg.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function CreateAccount1() {
  const route = useRouter()
  return (
    <div className='flex justify-center items-center h-screen overflow-hidden'>
      <Image
        src={AuthBG}
        alt='Auth Background'
        className='mt-[6rem] -mr-[8rem]  -z-10'
      />

      <div className='w-full sm:w-[600px] flex flex-col items-center justify-center p-10 my-auto'>
        <div className='flex flex-col justify-center items-center mb-4'>
          <span className='xl:text-3xl lg:text-2xl md:text-xl text-lg text-main-brand leading-4 font-bold'>
            Create an account
          </span>
          <p className='text-[#020202]/70 dark:text-light/70 text-left sm:text-center text-sm w-[90%]'>
            Create your beastmood account to like, add to fave and leave
            comments!
          </p>
        </div>

        <form className='w-full px-12 mt-4 space-y-4'>
          <div className='space-y-2'>
            <div className='space-y-1'>
              <label
                htmlFor='firstName'
                className='text-dark dark:text-light text-base'
              >
                First Name
              </label>
              <Input
                id='firstName'
                type='text'
                name='firstName'
                className='input'
                placeholder='Enter your first name'
              />
            </div>

            <div className='space-y-1'>
              <label
                htmlFor='lastName'
                className='text-dark dark:text-light text-base'
              >
                Last Name
              </label>
              <Input
                id='lastName'
                type='text'
                name='lastName'
                className='input'
                placeholder='Enter your last name'
              />
            </div>

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
                name='email'
                className='input'
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
                placeholder='Enter Password'
              />
            </div>
            <Button
              type='submit'
              onClick={(e) => {
                e.preventDefault();
                route.push("/auth/account/ac648c1c846a008ea7d6631515");
              }}
              className='btn bg-main-brand disabled:bg-dark3 disabled:text-light4 text-white text-[.9rem] py-3.5 !mt-4 hover:scale-[.98] transition-all ease-in-out duration-300'
            >
              Continue
            </Button>
          </div>

          <div className='w-full pt-1'>
            <Button
              type='button'
              className='btn bg-transparent border-[2px] border-[#B5AFFF] disabled:bg-dark3 disabled:text-dark2 text-dark dark:text-light/70 text-[.9rem] py-3.5 hover:scale-[.98] transition-all ease-in-out duration-300'
            >
              Sign up with Google
            </Button>
          </div>

          <div className='w-full flex items-center justify-center gap-1 text-lg'>
            <span className='text-gray-800 dark:text-light/90 text-sm'>
              Already have an account?{" "}
            </span>
            <Link
              href='/auth/login'
              className='text-main-brand font-semibold text-sm'
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
