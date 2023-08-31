import React from "react";
import SpecialsSidenav from "./SpecialsSidenav";
import image from "@/public/images/Parasyte-small.png";
import Image from "next/image";

export default function Specials() {
  return (
    <div className='p-5 xs:p-2 sm:p-10 my-2 md:my-5'>
      <div className='flex flex-col items-center justify-center'>
        <span className='text-[1.3rem] md:text-[1.4rem] text-[#000000] dark:text-[#fff] capitalize font-montserrat font-medium leading-7'>
          beast mood&apos;s special
        </span>
        <p className='text-[.8rem] md:text-[.9rem] text-[#000000]/60 dark:text-darkGray'>
          Checkout Collections Curated Just for you!
        </p>
      </div>

      <div className='flex flex-col lg:flex-row w-full my-6'>
        <div className='col-span-1 lg:mr-10 xl:mr-14'>
          <SpecialsSidenav />
        </div>

        <div className='col-span-5 flex flex-col items-center justify-center w-full'>
          <div className='flex flex-wrap items-center justify-center lg:justify-start gap-x-4 xl:gap-x-8 gap-y-8 xl:gap-y-12 w-full mb-8'>
            <div className='card card-container2'>
              <Image src={image} alt='kimitsu no yaiba' />

              <div>
                <span>kimitsu no yaiba</span>
                <p>Chapter 144 out today!</p>
              </div>

              <span>Genre | Sub</span>
            </div>
            <div className='card card-container2'>
              <Image src={image} alt='kimitsu no yaiba' />

              <div>
                <span>kimitsu no yaiba</span>
                <p>Chapter 144 out today!</p>
              </div>

              <span>Genre | Sub</span>
            </div>
            <div className='card card-container2'>
              <Image src={image} alt='kimitsu no yaiba' />

              <div>
                <span>kimitsu no yaiba</span>
                <p>Chapter 144 out today!</p>
              </div>

              <span>Genre | Sub</span>
            </div>
            <div className='card card-container2'>
              <Image src={image} alt='kimitsu no yaiba' />

              <div>
                <span>kimitsu no yaiba</span>
                <p>Chapter 144 out today!</p>
              </div>

              <span>Genre | Sub</span>
            </div>
            <div className='card card-container2'>
              <Image src={image} alt='kimitsu no yaiba' />

              <div>
                <span>kimitsu no yaiba</span>
                <p>Chapter 144 out today!</p>
              </div>

              <span>Genre | Sub</span>
            </div>
            <div className='card card-container2'>
              <Image src={image} alt='kimitsu no yaiba' />

              <div>
                <span>kimitsu no yaiba</span>
                <p>Chapter 144 out today!</p>
              </div>

              <span>Genre | Sub</span>
            </div>
            <div className='card card-container2'>
              <Image src={image} alt='kimitsu no yaiba' />

              <div>
                <span>kimitsu no yaiba</span>
                <p>Chapter 144 out today!</p>
              </div>

              <span>Genre | Sub</span>
            </div>
            <div className='card card-container2'>
              <Image src={image} alt='kimitsu no yaiba' />

              <div>
                <span>kimitsu no yaiba</span>
                <p>Chapter 144 out today!</p>
              </div>

              <span>Genre | Sub</span>
            </div>
          </div>
          <button className='p-3 md:p-4 rounded-md text-base text-center text-white bg-gradient-to-r from-[#FF5E03] to-[#FFD64E] w-[89%] md:w-full'>
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
