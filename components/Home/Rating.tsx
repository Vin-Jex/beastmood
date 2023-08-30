import Image from "next/image";
import React from "react";
import Img from "@/public/images/small.png";
import Img2 from "@/public/images/Rectangle 24.png";
import { ArrowForward } from "@mui/icons-material";
import RatingCard from "../Molecules/ratingCard";

const Rating = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 place-items-center place-content-center p-4 xl:p-14 my-2 md:my-5 font-montserrat space-y-16'>
      <div className='flex flex-col w-full col-span-1 px-4 justify-center items-center'>
        <div className='w-full flex flex-col justify-center'>
          <Image src={Img} alt='Avater' className='w-[12em] !mb-3 mx-auto' />
          <span className='text-dark dark:text-light text-base md:text-lg xl:text-xl text-center font-medium capitalize'>
            Top Rated Manga
          </span>
          <p className='text-dark dark:text-light text-sm md:text-[.9rem] text-center'>
            Checkout all completed series with best ratings.
          </p>
        </div>

        <button className='rating mx-auto group'>
          View all
          <ArrowForward />
        </button>
      </div>

      <div className='col-span-2 lg:col-span-4 w-full flex flex-row flex-wrap sm:flex-nowrap gap-y-20 sm:gap-y-0 justify-evenly items-center ml-0 lg:ml-32'>
        <div className='px-4 py-2 flex flex-col w-full'>
          <span className='text-dark dark:text-light text-lg capitalize mb-8'>
            Weekly ranking
          </span>

          <ul className='flex flex-col space-y-6'>
            <RatingCard
              index={1}
              title='Shingeki no Kyogin...'
              subTitle=' 紗子 Thriller'
              imageSrc={Img2}
            />
            <RatingCard
              index={2}
              title='Shingeki no Kyogin...'
              subTitle=' 紗子 Thriller'
              imageSrc={Img2}
            />
            <RatingCard
              index={3}
              title='Shingeki no Kyogin...'
              subTitle=' 紗子 Thriller'
              imageSrc={Img2}
            />
            <RatingCard
              index={4}
              title='Shingeki no Kyogin...'
              subTitle=' 紗子 Thriller'
              imageSrc={Img2}
            />
            <RatingCard
              index={5}
              title='Shingeki no Kyogin...'
              subTitle=' 紗子 Thriller'
              imageSrc={Img2}
            />
          </ul>
        </div>
        <div className='px-4 py-2 flex flex-col w-full'>
          <span className='text-dark dark:text-light text-lg capitalize mb-8'>
            Top Genres
          </span>

          <ul className='flex flex-col space-y-6'>
            <RatingCard
              index={1}
              title='Shingeki no Kyogin...'
              subTitle=' 紗子 Thriller'
              imageSrc={Img2}
            />
            <RatingCard
              index={2}
              title='Shingeki no Kyogin...'
              subTitle=' 紗子 Thriller'
              imageSrc={Img2}
            />
            <RatingCard
              index={3}
              title='Shingeki no Kyogin...'
              subTitle=' 紗子 Thriller'
              imageSrc={Img2}
            />
            <RatingCard
              index={4}
              title='Shingeki no Kyogin...'
              subTitle=' 紗子 Thriller'
              imageSrc={Img2}
            />
            <RatingCard
              index={5}
              title='Shingeki no Kyogin...'
              subTitle=' 紗子 Thriller'
              imageSrc={Img2}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rating;
