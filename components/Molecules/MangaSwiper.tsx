import { ArrowForward, ArrowForwardIos } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { BASE_URL } from "../Atoms/fetchApi";
import Link from "next/link";

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
  navigationLink: string;
  pagination: boolean;
  modalState?: any;
  handleModal?: any;
  parameter?: any;
}
export default function MangaSwiper({
  title,
  subtitle,
  navigationLink,
  pagination,
  modalState,
  handleModal,
  parameter,
}: MangeSwiperProps) {
  const router = useRouter();
  const [mangasData, setMangasData] = useState([]);

  useEffect(() => {
    fetchManga();
  }, []);

  const fetchManga = async () => {
    const apiUrl = parameter
      ? `${BASE_URL}/get_external_mangas${parameter}`
      : `${BASE_URL}/get_external_mangas`;
    try {
      const response = await fetch(apiUrl);
      const responseData = await response.json();

      if (!response.ok) {
        console.log("Response: ", responseData);
      }

      setMangasData(responseData.data[0].data);
    } catch (error) {
    } finally {
    }
  };

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
            if (!Cookies.get("jwt")) {
              handleModal?.();
            } else {
              router.push(navigationLink ? navigationLink : "");
            }
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
        {mangasData?.map(
          ({ id, img, title, chapter, genre, host_name, views, index }) => {
            return (
              <SwiperSlide className='mb-16' key={index}>
                <Link
                  href='/mangas/[mangaId]/[host_name]'
                  as={`/mangas/${id}/${host_name}`}
                  // href={`/mangas/${id}/${host_name}`}
                  className='card card-container !mx-0'
                  key={index}
                >
                  <Image width='100000' height='100000' src={img} alt={title} />

                  <div>
                    <span>{title}</span>
                    <p>{chapter}</p>
                  </div>

                  <span>{views}</span>
                </Link>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </div>
  );
}
