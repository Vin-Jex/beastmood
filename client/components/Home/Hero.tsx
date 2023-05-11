import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Img1 from "@/public/images/Large1.jpg";
import Img2 from "@/public/images/Large2.jpg";
import Img3 from "@/public/images/Large3.jpg";
import Img4 from "@/public/images/Large4.jpg";
import Img5 from "@/public/images/Large5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const images = [Img1, Img2, Img3, Img4, Img5];

export default function Hero() {
  return (
    <div className='bg-blue-100 relative'>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt='backgroundImage'
              className='h-screen w-full object-cover -z-20 absolute top-0 '
            />

            <div
              className={`flex flex-col justify-center h-screen z-10 p-8 md:p-16 gap-12`}
            >
              <div className='text-[1.7rem] sm:text-[2.5rem] md:text-[3.3rem] font-bold font-[Montserrat] text-white md:leading-[4.4rem] flex flex-col space-y-1 md:space-y-3'>
                <span className='w-[10em]'>
                  Journey into the world of mangas:
                </span>
                <span className='w-[12em]'>
                  Where imagination knows no bounds
                </span>
              </div>

              <div className='space-y-5 md:space-x-4 banner-btn'>
                <button className='btn-2 w-full md:w-[205.12px] border-[1.3px] border-[#FFD64E] text-white hover:text-black text-base md:text-lg duration-500'>
                  <span className='bg-main2-brand'></span>
                  Start Reading
                </button>
                <button className='btn-2 w-full md:w-[352.34px] border-[1.5px] border-main-brand hover:border-main-brand bg-main-brand hover:bg-transparent duration-500 text-white hover:text-white text-base md:text-lg'>
                  <span className='bg-[#00000034]'></span>
                  Subscricbe to our Newsletter
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
