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
    <div className='bg-blue-100 relative w-full'>
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
              className={`flex flex-col justify-center h-screen z-10 p-8 md:p-16 gap-12 bg-gradient-to-r from-[#000000] via-[#000000E1] to-gray-200/50`}
            >
              <div className='w-full lg:w-[607px] flex flex-col space-y-2 md:space-y-5'>
                <span className='font-medium text-base sm:text-lg lg:text-xl text-light capitalize'>
                  #Beastmood 1
                </span>

                <span className='font-bold text-[1.8rem] sm:text-[2rem] lg:text-[2.6rem] text-light'>
                  One Piece
                </span>
                <p className='text-[16px] sm:text-[18px] lg:text-[21px] text-light'>
                  &quot;One Piece&quot; is a long-running Japanese manga and
                  anime series created by Eiichiro Oda. The story follows the
                  adventures of Monkey D. Luffy, a young pirate with a dream to
                  become the Pirate King and find the legendary treasure known
                  as One Piece.
                </p>
                <div className='flex gap-x-4 md:gap-x-8 !mt-10'>
                  <button className='flex items-center gap-x-3 bg-main-brand text-white text-sm md:text-base font-medium capitalize px-8 py-3.5 rounded-md w-fit'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-[17px] md:w-[20px]'
                      viewBox='0 0 24 20'
                      fill='none'
                    >
                      <path
                        d='M22.9674 0.70459C22.7855 0.560153 22.5727 0.459814 22.3456 0.411445C22.1185 0.363076 21.8832 0.367992 21.6583 0.425809L13.2707 2.58333V19.8798L22.4341 17.5284C22.7618 17.4445 23.052 17.2533 23.2585 16.9853C23.465 16.7173 23.5759 16.3879 23.5734 16.0496V1.89244C23.5697 1.66133 23.5132 1.43414 23.4081 1.22825C23.3031 1.02237 23.1523 0.843241 22.9674 0.70459ZM10.8465 2.58333L2.4346 0.425809C2.21314 0.374531 1.98308 0.372935 1.76093 0.421137C1.53879 0.469338 1.33007 0.56614 1.14979 0.70459C0.966069 0.848224 0.817988 1.03233 0.717075 1.24256C0.616161 1.4528 0.56514 1.68349 0.567984 1.91668V16.0496C0.568239 16.3859 0.680331 16.7125 0.886606 16.978C1.09288 17.2435 1.38162 17.4329 1.70735 17.5163L10.8465 19.8798V2.58333Z'
                        fill='white'
                      />
                    </svg>
                    Read
                  </button>
                  <button className='flex items-center gap-x-3 bg-main2-brand text-sm md:text-base text-dark font-medium capitalize px-8 py-3.5 rounded-md w-fit'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-[18px] md:w-[21px] mt-0.5 md:mt-1'
                      viewBox='0 0 21 15'
                      fill='none'
                    >
                      <path
                        d='M1.65402 2.72164C1.34628 2.72164 1.08814 2.61737 0.879598 2.40883C0.671059 2.20029 0.567151 1.94251 0.567875 1.6355C0.567875 1.32775 0.672145 1.06961 0.880685 0.861075C1.08922 0.652535 1.347 0.548627 1.65402 0.549351H12.5155C12.8232 0.549351 13.0814 0.653621 13.2899 0.862161C13.4984 1.0707 13.6023 1.32848 13.6016 1.6355C13.6016 1.94324 13.4973 2.20138 13.2888 2.40992C13.0803 2.61846 12.8225 2.72236 12.5155 2.72164H1.65402ZM1.65402 7.06622C1.34628 7.06622 1.08814 6.96195 0.879598 6.75341C0.671059 6.54487 0.567151 6.28709 0.567875 5.98008C0.567875 5.67233 0.672145 5.41419 0.880685 5.20565C1.08922 4.99711 1.347 4.89321 1.65402 4.89393H12.5155C12.8232 4.89393 13.0814 4.9982 13.2899 5.20674C13.4984 5.41528 13.6023 5.67306 13.6016 5.98008C13.6016 6.28782 13.4973 6.54596 13.2888 6.7545C13.0803 6.96304 12.8225 7.06695 12.5155 7.06622H1.65402ZM1.65402 11.4108C1.34628 11.4108 1.08814 11.3065 0.879598 11.098C0.671059 10.8895 0.567151 10.6317 0.567875 10.3247C0.567875 10.0169 0.672145 9.75877 0.880685 9.55023C1.08922 9.34169 1.347 9.23779 1.65402 9.23851H8.17089C8.47863 9.23851 8.73677 9.34278 8.94531 9.55132C9.15385 9.75986 9.25776 10.0176 9.25704 10.3247C9.25704 10.6324 9.15277 10.8905 8.94423 11.0991C8.73569 11.3076 8.47791 11.4115 8.17089 11.4108H1.65402ZM14.3076 13.9089L11.9724 11.5737C11.7733 11.3746 11.6737 11.1212 11.6737 10.8134C11.6737 10.5057 11.7733 10.2522 11.9724 10.0531C12.1715 9.85399 12.4206 9.75443 12.7197 9.75443C13.0187 9.75443 13.2765 9.85399 13.493 10.0531L15.0679 11.5737L18.9237 7.71791C19.1229 7.51878 19.3719 7.41922 19.671 7.41922C19.97 7.41922 20.2278 7.52783 20.4443 7.74506C20.6616 7.96229 20.7658 8.22478 20.7571 8.53252C20.7485 8.84026 20.6351 9.10274 20.4172 9.31997L15.8282 13.9089C15.6291 14.1081 15.3757 14.2076 15.0679 14.2076C14.7602 14.2076 14.5067 14.1081 14.3076 13.9089Z'
                        fill='#000'
                      />
                    </svg>
                    add to
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
