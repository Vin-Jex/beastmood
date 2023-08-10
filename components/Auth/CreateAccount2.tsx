import React, { useRef, useState } from "react";
import Layout from "../Layout/Layout";
import Input from "../Molecules/Input/Input";
import Button from "../Molecules/Input/Button";

import Image, { StaticImageData } from "next/image";
import bg from "@/public/images/Bungostraydogs-small-1.png";
import { useRouter } from "next/router";
import AvaterEditingModal from "../Molecules/Modal/AvaterEditingModal";

const CreateAccount2 = () => {
  const route = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [file, setFile] = useState<string | StaticImageData>(bg);
  const [photoURL, setPhotoURL] = useState<string | StaticImageData>("");

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

  console.log(file, "FDGBTRD");

  return (
    <div className='flex justify-center items-center h-screen overflow-hidden'>
      <div className='w-full sm:w-[600px] flex flex-col items-center justify-center px-6 py-6 sm:p-8 md:p-10 my-auto'>
        <div className='flex flex-col justify-center items-center mb-4'>
          <span className='xl:text-3xl lg:text-2xl md:text-xl text-lg text-center w-[80%] text-main-brand leading-6 sm:leading-6 font-bold'>
            Choose your Avatar and Username
          </span>
        </div>

        <form className='w-full px-0 sm:px-4 md:px-12 mt-4 space-y-4'>
          <div className='w-full flex flex-col items-center justify-center gap-y-8 !mb-8'>
            <Image
              src={!photoURL ? file : photoURL}
              alt='avater'
              width={100}
              height={100}
              className='w-20 h-20 md:w-28 md:h-28 rounded-full object-cover'
            />

            <div className="!mt-3">
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
                className='input'
                placeholder='Enter Username'
              />
              <span className='text-[.69rem] sm:text-xs text-dark/90 dark:text-light/90 px-1'>
                Alphanumeric characters, hyphens and underscores only.
              </span>
            </div>

            <Button
              type='submit'
              onClick={(e) => {
                e.preventDefault();
                route.push("/");
              }}
              className='btn mx-auto bg-main-brand disabled:bg-dark3 disabled:text-light4 text-white text-[.79rem] sm:text-[.9rem] px-8 py-3.5 !mt-12 hover:scale-[.98] transition-all ease-in-out duration-300 uppercase'
            >
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
        setPhotoURL={setPhotoURL}
      />
    </div>
  );
};

export default CreateAccount2;
