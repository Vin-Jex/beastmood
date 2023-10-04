import React from "react";
import Input from "../Molecules/Input/Input";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import Link from "next/link";
import Button from "../Molecules/Input/Button";
import AuthBG from "@/public/images/authbg.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useFormContext } from "@/context/FormContext";

export default function CreateAccount1() {
  const {
    setEmail,
    setPassword,
    setFormErrors,
    setLastName,
    setFirstName,
    formErrors,
    firstName,
    lastName,
    email,
    password,
  } = useFormContext();
  const route = useRouter();

  const validateInput = (type: string, value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    if (type === "email") {
      return emailRegex.test(value) ? "" : "Invalid email address";
    }

    if (type === "password") {
      if (passwordRegex.test(value)) {
        return "";
      } else {
        return "Password must be at least 8 characters long and contain uppercase, lowercase, and special characters.";
      }
    }
  };

  const handleInputChange = (type: string, value: string) => {
    const errorMessage = validateInput(type, value);
    setFormErrors((prevState) => ({
      ...prevState,
      [type]: errorMessage,
    }));

    if (type === "email") {
      setEmail(value);
    }

    if (type === "password") {
      setPassword(value);
    }

    if (type === "lastName") {
      setLastName(value);
    }

    if (type === "firstName") {
      setFirstName(value);
    }
  };

  const isFormValid =
    formErrors.email === "" &&
    formErrors.password === "" &&
    firstName !== "" &&
    lastName !== "" &&
    email !== "" &&
    password !== "";

  return (
    <div className='flex justify-center items-center h-screen overflow-hidden'>
      <Image
        src={AuthBG}
        alt='Auth Background'
        className='mt-[6rem] -mr-[8rem] -z-10 hidden md:block'
      />

      <div className='w-full sm:w-[600px] flex flex-col text-start md:items-center justify-center p-6 md:p-10 my-auto'>
        <div className='flex flex-col justify-center items-start md:items-center mb-4'>
          <span className='xl:text-3xl md:text-2xl text-2xl text-main-brand leading-4 font-bold'>
            Create an account
          </span>
          <p className='text-[#020202]/70 dark:text-light/70 text-left sm:text-center text-sm w-[90%] mt-2.5 md:mt-0'>
            Create your beastmood account to like, add to fave and leave
            comments!
          </p>
        </div>

        <form className='w-full md:p-10 mt-4 space-y-4'>
          <div className='space-y-3 '>
            {formErrors.password && (
              <p className='text-red-500'>{formErrors.password}</p>
            )}

            {formErrors.email && (
              <p className='text-red-500'>{formErrors.email}</p>
            )}
          </div>
          <div className='space-y-2'>
            {/* First Name Input */}
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
                value={firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className='input'
                placeholder='Enter first name'
                required
              />
            </div>

            {/* Last Name Input */}
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
                value={lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className='input'
                placeholder='Enter last name'
                required
              />
            </div>

            {/* Email Input */}
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
                value={email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full px-3 sm:px-4 py-3.5 rounded-md !outline-none bg-transparent text-xs sm:text-sm placeholder:text-xs sm:placeholder:text-sm placeholder:text-dark dark:placeholder:text-light/80 first-letter:!uppercase text-dark dark:text-light/80 ${
                  formErrors.email
                    ? "!border-[#FF3B3B] dark:!border-[#FF3B3B]"
                    : "!border-dark dark:!border-light/70"
                }`}
                placeholder='Enter your email'
                required
              />
            </div>

            {/* Password Input */}
            <div className='space-y-1'>
              <label
                htmlFor='password'
                className='text-dark dark:text-light text-base px-1'
              >
                Password
              </label>
              <Input
                id='password'
                type='password'
                name='password'
                value={password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className={`w-full px-3 sm:px-4 py-3.5 rounded-md !outline-none bg-transparent text-xs sm:text-sm placeholder:text-xs sm:placeholder:text-sm placeholder:text-dark dark:placeholder:text-light/80 first-letter:!uppercase text-dark dark:text-light/80 ${
                  formErrors.password
                    ? "!border-[#FF3B3B] dark:!border-[#FF3B3B]"
                    : "!border-dark dark:!border-light/70"
                }`}
                showIcon={VisibilityOutlined}
                hideIcon={VisibilityOffOutlined}
                placeholder='Enter Password'
                required
              />
            </div>

            {/* Continue Button */}
            <Button
              type='submit'
              onClick={(e) => {
                e.preventDefault();
                if (isFormValid) {
                  route.push("/auth/account/ac648c1c846a008ea7d6631515");
                }
              }}
              className={`btn bg-main-brand disabled:cursor-not-allowed disabled:bg-dark3 disabled:text-light4 text-white text-[.9rem] py-3.5 !mt-4 ${
                isFormValid ? "hover:scale-[.98]" : ""
              } transition-all ease-in-out duration-300`}
              disabled={!isFormValid}
            >
              Continue
            </Button>
          </div>
        </form>

        {/* Sign up with Google Button */}
        <div className='w-full md:w-[85%] mt-4 md:-mt-4'>
          <Button
            type='button'
            className={`btn bg-transparent border-[2px] border-[#B5AFFF] disabled:bg-dark3 disabled:text-dark2 text-dark dark:text-light/70 text-[.9rem] py-3.5 transition-all ease-in-out duration-300`}
          >
            Sign up with Google
          </Button>
        </div>

        {/* Login Link */}
        <div className='w-full flex items-center justify-center gap-1 text-lg mt-2'>
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
      </div>
    </div>
  );
}
