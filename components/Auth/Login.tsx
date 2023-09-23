import React, { useState } from "react";
import Input from "../Molecules/Input/Input";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import Link from "next/link";
import Button from "../Molecules/Input/Button";
import AuthBG from "@/public/images/authbg.png";
import Image from "next/image";
import fetchApi from "../Atoms/fetchApi";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Login() {
  const [emailUsername, setEmailUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const isEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    emailUsername
  );
  const isUsername = /^[a-zA-Z0-9_\- ]+$/.test(emailUsername);

  const maxAge = 1 * 24 * 60 * 60;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Reset previous error messages
    setErrorMessage("");
    setSuccessMessage("");

    if (!isEmail && !isUsername) {
      setErrorMessage("Please enter a valid email address or username");
      return;
    }

    if (!navigator.onLine) {
      setErrorMessage("No internet connection");
      return;
    }

    if (!emailUsername.trim()) {
      setErrorMessage("Email or username cannot be empty");
      return;
    }

    if (!password.trim()) {
      setErrorMessage("Password cannot be empty");
      return;
    }

    if (!isEmail && !isUsername) {
      setErrorMessage(
        "Username must contain only letters, numbers, underscores, hyphens, and spaces."
      );
      return;
    }

    let payload: any = {};

    if (isEmail) {
      payload = { email: emailUsername };
    } else {
      payload = { username: emailUsername };
    }

    payload.password = password;

    try {
      const response = await fetch(
        "https://api.beastmoodsee.com/api/v1/auth/login",
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const responseData = await response.json();
        setErrorMessage(responseData.error || "Login failed");
        return;
      }

      const data = await response.json();
      Cookies.set("jwt", data.token, { expires: maxAge * 1000, secure: true });
      setSuccessMessage("Login successful");
    } catch (error) {
      if (!navigator.onLine) {
        setErrorMessage("Network error: Unable to reach the server");
      } else {
        console.error("Error Fetching: ", error);
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleLogin(event);
    }
  };
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

        {errorMessage && <div className='text-red-500'>{errorMessage}</div>}
        {successMessage && (
          <div className='text-green-500'>{successMessage}</div>
        )}

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
                type='text'
                className={`input ${errorMessage ? "!border-red-500" : ""}`}
                placeholder='Enter your email'
                required
                value={emailUsername}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmailUsername(e.target.value)
                }
                onKeyPress={handleKeyPress}
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
                className={`input ${
                  errorMessage ? "!border-red-500" : "!border-red-500"
                }`}
                showIcon={VisibilityOutlined}
                hideIcon={VisibilityOffOutlined}
                required
                placeholder='•••••••••••'
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                onKeyPress={handleKeyPress}
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
              type='button'
              onClick={handleLogin}
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
