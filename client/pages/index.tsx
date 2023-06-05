import ThemeSwitch from "@/components/Molecules/ThemeSwitch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Img1 from "@/public/images/Chainsaw-banner.png";
import Img2 from "@/public/images/Chainsaw-banner.png";
import Img3 from "@/public/images/Chainsaw-banner.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Hero from "@/components/Home/Hero";
import LatestRelease from "@/components/Home/LatestRelease";
import Specials from "@/components/Home/Specials/Specials";
import Rating from "@/components/Home/Rating";
import Features from "@/components/Home/Features";
import Meta from "@/components/Meta";
import Populate from "@/components/Home/Populate";

const images = [Img1, Img2, Img3];

export default function Home() {
  return (
    <main className='w-full relative'>
      <Meta />
      <Hero />
      <LatestRelease />
      <Specials />
      <Rating />
      <Features />
      <Populate />
      {/* <ThemeSwitch /> */}
    </main>
  );
}
