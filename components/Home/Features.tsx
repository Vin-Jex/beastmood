import React from "react";
import Img1 from "@/public/images/Onepiece-small-1.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowForward, FavoriteBorderSharp } from "@mui/icons-material";
import Cookies from "js-cookie";

const swipData = [
  {
    image: Img1,
    title: "One Piece",
    dateRelease: "Chapter 1064 out today",
    genre: "Genre | Sub",
  },
  {
    image: Img1,
    title: "One Piece",
    dateRelease: "Chapter 1064 out today",
    genre: "Genre | Sub",
  },
  {
    image: Img1,
    title: "One Piece",
    dateRelease: "Chapter 1064 out today",
    genre: "Genre | Sub",
  },
  {
    image: Img1,
    title: "One Piece",
    dateRelease: "Chapter 1064 out today",
    genre: "Genre | Sub",
  },
  {
    image: Img1,
    title: "One Piece",
    dateRelease: "Chapter 1064 out today",
    genre: "Genre | Sub",
  },
  {
    image: Img1,
    title: "One Piece",
    dateRelease: "Chapter 1064 out today",
    genre: "Genre | Sub",
  },
  {
    image: Img1,
    title: "One Piece",
    dateRelease: "Chapter 1064 out today",
    genre: "Genre | Sub",
  },
  {
    image: Img1,
    title: "One Piece",
    dateRelease: "Chapter 1064 out today",
    genre: "Genre | Sub",
  },
  {
    image: Img1,
    title: "One Piece",
    dateRelease: "Chapter 1064 out today",
    genre: "Genre | Sub",
  },
  {
    image: Img1,
    title: "One Piece",
    dateRelease: "Chapter 1064 out today",
    genre: "Genre | Sub",
  },
  {
    image: Img1,
    title: "One Piece",
    dateRelease: "Chapter 1064 out today",
    genre: "Genre | Sub",
  },
  {
    image: Img1,
    title: "One Piece",
    dateRelease: "Chapter 1064 out today",
    genre: "Genre | Sub",
  },
];

const Features = ({
  modalState,
  handleModal,
}: {
  modalState: any;
  handleModal: any;
}) => {
  return (
    <div className='p-2 md:p-8 xl:p-10 2xl:p-14'>
      <div className='w-full h-full min-h-[400px] rounded-lg bg-gradient-to-r from-[#FF5E03] to-[#FFD601] py-6 px-4 md:py-6 md:px-6 xl:py-10 xl:px-10 2xl:px-10 2xl:py-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 place-items-center place-content-center gap-y-6'>
        <div className='col-span-1 lg:col-span-3 w-full h-full px-2'>
          <span className='text-sm sm:text-base xl:text-lg text-light/80 font-montserrat'>
            Featured Manga
          </span>
          <h3 className='text-xl xl:text-2xl 2xl:text-3xl text-[#FFFFFF98] mt-1 md:mt-3 xl:mt-4 sm:mb-3 mb-2'>
            One Punch Man
          </h3>
          <p className='text-sm sm:text-sm xl:text-lg text-light/80 pr-2 xl:pr-6 2xl:pr-16'>
            Saitama, a superhero who, because he can defeat any opponent with a
            single punch, grows bored from a lack of challenge.
          </p>
          <button
            onClick={() => {
              if (!Cookies.get("jwt")) {
                handleModal?.();
              }
            }}
            className='rating !text-white text-base hover:!text-dark dark:border-[#FFD64E] border-[#FFD64E] !px-4 xl:!px-6 2xl:!px-8'
          >
            All Seasons
            <ArrowForward />
          </button>
        </div>
        <div className='col-span-1 sm:col-span-2 lg:col-span-6 w-full h-full'>
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            speed={800}
            grabCursor={true}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              850: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1350: {
                slidesPerView: 3,
                spaceBetween: 18,
              },
              1536: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
          >
            {swipData?.map(({ image, title, dateRelease, genre }, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className='flex flex-col items-center gap-3 font-montserrat overflow-hidden rounded-lg relative'>
                    <Image
                      src={image}
                      alt={title}
                      className='w-full h-[226px] sm:h-[280px] md:h-[295px] lg:h-[300px] shrink-0 object-cover object-left-top'
                    />

                    <div className='flex items-center justify-between w-full absolute bottom-0 left-0 h-16 bg-gradient-to-b from-[#00000001] via-[#000000E1] to-gray-900/90 px-4'>
                      <span className='text-sm text-darkGray font-medium'>
                        {title}
                      </span>
                      <span className='gap-x-1 flex items-center justify-center text-sm text-darkGray font-inter'>
                        <FavoriteBorderSharp className='text-[#FFD978] text-lg my-auto' />
                        {23}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Features;
