import { ArrowForward, ArrowForwardIos } from "@mui/icons-material";
import React from "react";
import Img1 from "@/public/images/Onepiece-small-1.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRouter } from "next/router";

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

export default function Populate() {
  const router = useRouter();
  return (
    <div className='px-3 py-4 md:p-10 space-y-7'>
      <div className='header'>
        <div>
          <span>popular reads</span>
        </div>

        <button className='' onClick={() => {
          router.push("/mangas")
        }}>
          <span className='hidden md:block'>See all</span>
          <ArrowForwardIos className='' sx={{ fontSize: "1rem" }} />
        </button>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        speed={800}
        grabCursor={true}
        modules={[Navigation]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1350: {
            slidesPerView: 7,
            spaceBetween: 15,
          },
          1536: {
            slidesPerView: 7,
            spaceBetween: 15,
          },
        }}
        className='mySwiper'
      >
        {swipData?.map(({ image, title, dateRelease, genre }, index) => {
          return (
            <SwiperSlide className='mb-16' key={index}>
              <div className='card card-container !mx-0'>
                <Image src={image} alt={title} />

                <div>
                  <span>{title}</span>
                  <p>{dateRelease}</p>
                </div>

                <span>{genre}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
