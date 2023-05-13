import Image from "next/image";
import React from "react";
import Img from "@/public/images/small.png";
import Img2 from "@/public/images/Rectangle 24.png";
import { ArrowForward } from "@mui/icons-material";

const Rating = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 place-items-center place-content-center p-4 xl:p-14 my-2 md:my-5 font-[Montserrat] space-y-16 lg:space-y-0 lg:space-x-32'>
      <div className='flex flex-col w-full col-span-1 px-4 justify-center items-center'>
        <div className="w-full flex flex-col justify-center">
          <Image src={Img} alt='Avater' className='w-[12em] !mb-3 mx-auto' />
          <span className='text-dark dark:text-light text-lg md:text-xl xl:text-2xl text-center font-medium capitalize'>
            Top Rated Manga
          </span>
          <p className='text-dark dark:text-light text-base md:text-[1.1rem] text-center'>
            Checkout all completed series with best ratings.
          </p>
        </div>

        <button className='rating mx-auto'>
          View all
          <ArrowForward />
        </button>
      </div>

      <div className='col-span-2 lg:col-span-4 w-full flex flex-row flex-wrap sm:flex-nowrap gap-y-20 sm:gap-y-0 justify-evenly items-center'>
        <div className='px-4 py-2 flex flex-col w-full'>
          <span className='text-dark dark:text-light text-xl capitalize mb-8'>
            Weekly ranking
          </span>

          <ul className='flex flex-col space-y-10'>
            <li className='flex gap-6 lg:gap-8'>
              <span className='text-dark dark:text-light xl:text-xl font-medium'>
                1.
              </span>

              <Image
                src={Img2}
                alt='Manga one'
                className='w-[4rem] xl:w-[5rem] h-[4rem] xl:h-[5rem] rounded-lg object-cover'
              />
              <div className='flex flex-col space-y-2'>
                <span className='text-dark dark:text-light text-lg lg:text-xl font-medium whitespace-nowrap'>
                  Shingeki no Kyogin...
                </span>
                <p className='text-dark dark:text-light text-base xl:text-lg'>
                  紗子 Thriller
                </p>
              </div>
            </li>
            <li className='flex gap-6 lg:gap-8'>
              <span className='text-dark dark:text-light xl:text-xl font-medium'>
                2.
              </span>

              <Image
                src={Img2}
                alt='Manga one'
                className='w-[4rem] xl:w-[5rem] h-[4rem] xl:h-[5rem] rounded-lg object-cover'
              />
              <div className='flex flex-col space-y-2'>
                <span className='text-dark dark:text-light text-lg lg:text-xl font-medium whitespace-nowrap'>
                  Shingeki no Kyogin...
                </span>
                <p className='text-dark dark:text-light text-base xl:text-lg'>
                  紗子 Thriller
                </p>
              </div>
            </li>
            <li className='flex gap-6 lg:gap-8'>
              <span className='text-dark dark:text-light xl:text-xl font-medium'>
                3.
              </span>

              <Image
                src={Img2}
                alt='Manga one'
                className='w-[4rem] xl:w-[5rem] h-[4rem] xl:h-[5rem] rounded-lg object-cover'
              />
              <div className='flex flex-col space-y-2'>
                <span className='text-dark dark:text-light text-lg lg:text-xl font-medium whitespace-nowrap'>
                  Shingeki no Kyogin...
                </span>
                <p className='text-dark dark:text-light text-base xl:text-lg'>
                  紗子 Thriller
                </p>
              </div>
            </li>
            <li className='flex gap-6 lg:gap-8'>
              <span className='text-dark dark:text-light xl:text-xl font-medium'>
                4.
              </span>

              <Image
                src={Img2}
                alt='Manga one'
                className='w-[4rem] xl:w-[5rem] h-[4rem] xl:h-[5rem] rounded-lg object-cover'
              />
              <div className='flex flex-col space-y-2'>
                <span className='text-dark dark:text-light text-lg lg:text-xl font-medium whitespace-nowrap'>
                  Shingeki no Kyogin...
                </span>
                <p className='text-dark dark:text-light text-base xl:text-lg'>
                  紗子 Thriller
                </p>
              </div>
            </li>
            <li className='flex gap-6 lg:gap-8'>
              <span className='text-dark dark:text-light xl:text-xl font-medium'>
                5.
              </span>

              <Image
                src={Img2}
                alt='Manga one'
                className='w-[4rem] xl:w-[5rem] h-[4rem] xl:h-[5rem] rounded-lg object-cover'
              />
              <div className='flex flex-col space-y-2'>
                <span className='text-dark dark:text-light text-lg lg:text-xl font-medium whitespace-nowrap'>
                  Shingeki no Kyogin...
                </span>
                <p className='text-dark dark:text-light text-base xl:text-lg'>
                  紗子 Thriller
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className='px-4 py-2 flex flex-col w-full'>
          <span className='text-dark dark:text-light text-xl capitalize mb-8'>
            Weekly ranking
          </span>

          <ul className='flex flex-col space-y-10'>
            <li className='flex gap-6 lg:gap-8'>
              <span className='text-dark dark:text-light xl:text-xl font-medium'>
                1.
              </span>

              <Image
                src={Img2}
                alt='Manga one'
                className='w-[4rem] xl:w-[5rem] h-[4rem] xl:h-[5rem] rounded-lg object-cover'
              />
              <div className='flex flex-col space-y-2'>
                <span className='text-dark dark:text-light text-lg lg:text-xl font-medium whitespace-nowrap'>
                  Shingeki no Kyogin...
                </span>
                <p className='text-dark dark:text-light text-base xl:text-lg'>
                  紗子 Thriller
                </p>
              </div>
            </li>
            <li className='flex gap-6 lg:gap-8'>
              <span className='text-dark dark:text-light xl:text-xl font-medium'>
                2.
              </span>

              <Image
                src={Img2}
                alt='Manga one'
                className='w-[4rem] xl:w-[5rem] h-[4rem] xl:h-[5rem] rounded-lg object-cover'
              />
              <div className='flex flex-col space-y-2'>
                <span className='text-dark dark:text-light text-lg lg:text-xl font-medium whitespace-nowrap'>
                  Shingeki no Kyogin...
                </span>
                <p className='text-dark dark:text-light text-base xl:text-lg'>
                  紗子 Thriller
                </p>
              </div>
            </li>
            <li className='flex gap-6 lg:gap-8'>
              <span className='text-dark dark:text-light xl:text-xl font-medium'>
                3.
              </span>

              <Image
                src={Img2}
                alt='Manga one'
                className='w-[4rem] xl:w-[5rem] h-[4rem] xl:h-[5rem] rounded-lg object-cover'
              />
              <div className='flex flex-col space-y-2'>
                <span className='text-dark dark:text-light text-lg lg:text-xl font-medium whitespace-nowrap'>
                  Shingeki no Kyogin...
                </span>
                <p className='text-dark dark:text-light text-base xl:text-lg'>
                  紗子 Thriller
                </p>
              </div>
            </li>
            <li className='flex gap-6 lg:gap-8'>
              <span className='text-dark dark:text-light xl:text-xl font-medium'>
                4.
              </span>

              <Image
                src={Img2}
                alt='Manga one'
                className='w-[4rem] xl:w-[5rem] h-[4rem] xl:h-[5rem] rounded-lg object-cover'
              />
              <div className='flex flex-col space-y-2'>
                <span className='text-dark dark:text-light text-lg lg:text-xl font-medium whitespace-nowrap'>
                  Shingeki no Kyogin...
                </span>
                <p className='text-dark dark:text-light text-base xl:text-lg'>
                  紗子 Thriller
                </p>
              </div>
            </li>
            <li className='flex gap-6 lg:gap-8'>
              <span className='text-dark dark:text-light xl:text-xl font-medium'>
                5.
              </span>

              <Image
                src={Img2}
                alt='Manga one'
                className='w-[4rem] xl:w-[5rem] h-[4rem] xl:h-[5rem] rounded-lg object-cover'
              />
              <div className='flex flex-col space-y-2'>
                <span className='text-dark dark:text-light text-lg lg:text-xl font-medium whitespace-nowrap'>
                  Shingeki no Kyogin...
                </span>
                <p className='text-dark dark:text-light text-base xl:text-lg'>
                  紗子 Thriller
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rating;
