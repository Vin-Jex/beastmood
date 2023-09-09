import { ArrowForward, ArrowForwardIos } from "@mui/icons-material";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRouter } from "next/router";

export type MangaItemsType = {
  image: string | StaticImageData;
  title: string;
  dateRelease: string;
  chapter?: string | number;
  genre: string;
};
export interface MangeSwiperProps {
  title: string;
  subtitle?: string;
  items: MangaItemsType[];
  navigationLink: string;
  pagination: boolean;
}

export default function MangaSwiper({
  title,
  subtitle,
  items,
  navigationLink,
  pagination,
}: MangeSwiperProps) {
  const router = useRouter();

  const modules = pagination ? [Navigation, Pagination] : [Navigation];
  return (
    <div className='px-3 py-4 md:p-10 space-y-7'>
      <div className='header'>
        <div>
          <span>{title}</span>
          {subtitle && <p>{subtitle}</p>}
        </div>

        <button
          onClick={() => {
            router.push(navigationLink ? navigationLink : "");
          }}
        >
          <span className='hidden md:block'>See all</span>
          <ArrowForwardIos className='' sx={{ fontSize: "1rem" }} />
        </button>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        speed={800}
        grabCursor={true}
        modules={modules}
        pagination={{
          clickable: true,
        }}
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
        {items?.map(({ image, title, dateRelease, genre }, index) => {
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
