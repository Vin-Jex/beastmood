import React, { useEffect, useRef, useState } from "react";
import Layout from "../Layout/Layout";
import Input from "../Molecules/Input/Input";
import Button from "../Molecules/Input/Button";
import Image, { StaticImageData } from "next/image";
import bg from "@/public/images/Bungostraydogs-small-1.png";
import { useRouter } from "next/router";
import AvaterEditingModal from "../Molecules/Modal/AvaterEditingModal";
import { useFormContext } from "@/context/FormContext";
import { CircularProgress } from "@mui/material";
import Cookies from "js-cookie";
import { maxAge } from "./Login";

const CreateAccount2 = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [file, setFile] = useState<string | StaticImageData>(bg);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    image,
    setImage,
    username,
    setUsername,
    setFormErrors,
    formErrors,
    email,
    firstName,
    lastName,
    password,
  } = useFormContext();

  useEffect(() => {
    setImage(bg.src);
  }, [])

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setFile(imageUrl);
      setModalOpen(true);
    }
  };

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const validateUsername = (value: string) => {
    // Regular expression for validating username
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]*$/;
    const isValid = usernameRegex.test(value);
    return isValid
      ? ""
      : "Username must start with a letter and can only contain alphanumeric characters, hyphens, and underscores.";
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Reset previous error messages
    setErrorMessage("");
    setSuccessMessage("");

    if (!username) {
      setErrorMessage("Please enter a username.");
      return;
    }

    if (!navigator.onLine) {
      setErrorMessage("No internet connection");
      return;
    }

    let payload = {
      email,
      username,
      password,
      firstName,
      lastName,
      avatar: image,
    };

    try {
      const response = await fetch(
        "https://api.beastmoodsee.com/api/v1/auth/signup/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const responseData = await response.json();
        setErrorMessage(responseData.error || "Registration failed.");
        return;
      }

      const data = await response.json();
      router.push("/");
      setSuccessMessage(data.message || "Registration successful");
    } catch (error) {
      if (!navigator.onLine) {
        setErrorMessage("Network error: Unable to reach the server");
      } else {
        console.error("Error Fetching: ", error);
      }
    }
  };

  return (
    <div className='flex justify-center items-center h-screen overflow-hidden'>
      <div className='w-full sm:w-[600px] flex flex-col items-center justify-center px-6 py-6 sm:p-8 md:p-10 my-auto'>
        <div className='flex flex-col justify-center items-center mb-4'>
          <span className='xl:text-4xl lg:text-2xl md:text-xl text-lg text-center w-[80%] text-main-brand leading-6 sm:leading-6 font-bold'>
            Choose your Avatar and Username
          </span>
        </div>

        <form
          className='w-full px-0 sm:px-4 md:px-12 mt-4 space-y-4'
          onSubmit={handleSubmit}
        >
          <div className='w-full flex flex-col items-center justify-center gap-y-8 !mb-8'>
            <Image
              src={!image ? file : image}
              alt='avater'
              width='1000'
              height='1000'
              className='w-20 h-20 md:w-28 md:h-28 rounded-full object-cover'
            />

            <div className='!mt-3'>
              <Button
                type='button'
                className='w-fit bg-transparent ring-2 ring-dark/80 dark:ring-light/80 text-dark dark:text-light text-sm px-4 py-3 capitalize'
                onClick={handleButtonClick}
              >
                choose avatar
              </Button>
              <input
                ref={fileInputRef}
                type='file'
                accept='image/png, image/jpeg, image/jpg, image/svg+xml'
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className='space-y-2'>
            {formErrors.username && (
              <p className='text-red-500'>{formErrors.username}</p>
            )}
            <div className='space-y-1'>
              <label
                htmlFor='firstName'
                className='text-dark dark:text-light text-sm sm:text-base'
              >
                Username
              </label>
              <Input
                id='username'
                type='text'
                name='username'
                className={`w-full px-3 sm:px-4 py-3.5 rounded-md !outline-none bg-transparent text-xs sm:text-sm placeholder:text-xs sm:placeholder:text-sm placeholder:text-dark dark:placeholder:text-light/80 first-letter:!uppercase text-dark dark:text-light/80 ${
                  formErrors.username
                    ? "!border-[#FF3B3B] dark:!border-[#FF3B3B]"
                    : "!border-dark dark:!border-light/70"
                }`}
                placeholder='Enter Username'
                value={username}
                onChange={(e) => {
                  const errorMessage = validateUsername(e.target.value);
                  setFormErrors((prevState) => ({
                    ...prevState,
                    username: errorMessage,
                  }));
                  setUsername(e.target.value);
                }}
                required
              />
              <span className='text-[.69rem] sm:text-xs text-dark/90 dark:text-light/90 px-1'>
                Alphanumeric characters, hyphens and underscores only.
              </span>
            </div>

            <Button
              type='submit'
              disabled={isLoading}
              className='btn mx-auto min-h-[60px] bg-main-brand disabled:bg-main-brand disabled:text-light4 text-white text-[.79rem] sm:text-[.9rem] px-8 py-3.5 !mt-12 hover:scale-[.98] transition-all ease-in-out duration-300 uppercase relative'
            >
              {isLoading && (
                <div className='bg-white text-dark !h-[60px] py-3.5 !w-full absolute top-1/2 -translate-y-1/2 left-0 flex items-center justify-center rounded-md z-10'>
                  <div className='spinner border-4 border- !rounded-full'></div>
                </div>
              )}
              Continue to beastmood
            </Button>
          </div>
        </form>
      </div>

      <AvaterEditingModal
        setFileURL={setFile}
        image={file as string}
        handleModal={handleModal}
        isModalOpen={modalOpen}
        setPhotoURL={setImage}
      />
    </div>
  );
};

export default CreateAccount2;
