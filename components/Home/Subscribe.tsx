import { ArrowForward } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import image from '@/public/images/pngegg 1.png'

const Subscricbe = () => {
  return (
    <div className='p-2 md:p-8 xl:p-10 2xl:p-14'>
      <div className='w-full h-full min-h-[300px] md:min-h-[350px] lg:min-h-[400px] rounded-lg bg-gradient-to-r from-[#FF5E03] to-[#FFD601] px-4 md:px-6 xl:px-10 2xl:px-10 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-2 place-items-center place-content-center overflow-hidden'>
        <div className='col-span-1 md:col-span-3 lg:col-span-1 2xl:col-span-1 w-full h-full px-2 py-6 md:py-6 xl:py-10 2xl:py-10 flex flex-col justify-center'>
          <span className='flex items-center gap-x-2 text-sm md:text-lg text-light/80 font-inter'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-[17px] md:w-[24px]'
              viewBox='0 0 24 19'
              fill='none'
            >
              <path
                d='M22.3576 4.71927C22.0906 4.4959 21.7662 4.35209 21.4214 4.30424C21.0765 4.2564 20.7252 4.30645 20.4075 4.44868L16.0035 6.40809L13.419 1.7615C13.2576 1.46983 13.021 1.22671 12.7339 1.05741C12.4467 0.888117 12.1195 0.798828 11.7861 0.798828C11.4528 0.798828 11.1255 0.888117 10.8384 1.05741C10.5512 1.22671 10.3147 1.46983 10.1533 1.7615L7.56876 6.40809L3.16477 4.44868C2.84778 4.30402 2.49649 4.25147 2.15105 4.29704C1.80561 4.34261 1.47996 4.48445 1.21134 4.70636C0.942708 4.92827 0.741941 5.22129 0.631986 5.55192C0.522031 5.88255 0.507326 6.23744 0.589552 6.57604L2.9595 16.6903C3.05818 17.1006 3.29239 17.4657 3.62425 17.7264C3.95612 17.9872 4.36623 18.1284 4.78827 18.1272C4.95582 18.1259 5.12233 18.1008 5.28279 18.0525C9.53631 16.8829 14.0266 16.8829 18.2802 18.0525C18.5222 18.121 18.7756 18.1399 19.0252 18.108C19.2747 18.0761 19.5152 17.994 19.7322 17.8668C19.9493 17.7395 20.1383 17.5697 20.288 17.3675C20.4377 17.1653 20.545 16.935 20.6034 16.6903L22.9827 6.57604C23.0631 6.23906 23.0471 5.88628 22.9366 5.55796C22.826 5.22964 22.6254 4.93902 22.3576 4.71927ZM18.5134 15.7946C14.1016 14.6499 9.47068 14.6499 5.05886 15.7946L2.94083 6.79997L6.97161 8.59142C7.3977 8.78256 7.88017 8.80612 8.32286 8.65741C8.76554 8.50869 9.13594 8.19862 9.36021 7.789L11.7861 3.43166L14.2121 7.789C14.4363 8.19862 14.8067 8.50869 15.2494 8.65741C15.6921 8.80612 16.1746 8.78256 16.6007 8.59142L20.6314 6.79997L18.5134 15.7946Z'
                fill='#FFD64E'
              />
            </svg>
            Premium
          </span>
          <h3 className='font-medium text-xl md:text-2xl mt-3 mb-5 w-[120px] md:w-[200px] bg-gradient-to-b from-white via-opacity-70 to-white/50 text-transparent bg-clip-text'>
            Subscribe to Premium Membership!
          </h3>

          <form className='flex space-x-2 w-full'>
            <input
              type='email'
              required
              aria-required
              className='bg-transparent text-[#FFFFFF98] placeholder:text-sm md:placeholder:text-base text-sm sm:text-base placeholder:text-[#ffffff98] font-montserrat px-4 py-4 w-[352px] rounded-md border border-[#fff]/60 focus:outline-none capitalize'
              placeholder='your email'
            />
            <button type="submit" className='flex items-center bg-main2-brand hover:bg-transparent border-main2-brand border-[1.5px] ease-in-out duration-300 rounded-md text-sm sm:text-base text-dark hover:text-white py-2 md:py-3 px-2 md:px-6'>
              Subscribe
              <ArrowForward className='text-xl bg-black text-white rounded-full p-1 ml-3 my-auto' />
            </button>
          </form>
        </div>
        <div className='col-span-1 md:col-span-2 lg:col-span-1 w-full h-[300px] md:h-[350px] lg:h-[400px] items-end justify-center hidden md:flex'>
          <Image src={image} alt='BillboardImage' className='mt-auto ' />
        </div>
      </div>
    </div>
  );
};

export default Subscricbe;
