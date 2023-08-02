import { ArrowForward } from '@mui/icons-material';
import React from 'react'

const Features = () => {
  return (
    <div className='p-2 md:p-8 xl:p-10 2xl:p-14'>
      <div className='w-full h-full rounded-lg bg-gradient-to-r from-[#FF5E03] to-[#FFD601] p-6 md:p-10 2xl:p-20 grid grid-cols-1 lg:grid-cols-4 place-items-center place-content-center'>
        <div className='col-span-1 md:col-span-2 2xl:col-span-1 w-full h-full px-2'>
          <span className='text-base sm:text-lg text-light/80 font-[Montserrat]'>
            Featured Manga
          </span>
          <h3 className='text-2xl sm:text-3xl text-[#FFFFFF98] mt-5 mb-3'>One Punch Man</h3>
          <p className='text-base sm:text-lg text-light/80 pr-2 xl:pr-6 2xl:pr-16'>
            Saitama, a superhero who, because he can defeat any opponent with a
            single punch, grows bored from a lack of challenge.
          </p>
          <button className='rating !text-white hover:!text-dark dark:border-[#FFD64E] border-[#FFD64E] !px-8 2xl:!px-8'>
            All Seasons
            <ArrowForward />
          </button>
        </div>
        <div className='col-span-1 md:col-span-2 2xl:col-span-3 w-full h-full'></div>
      </div>
    </div>
  );
}

export default Features
