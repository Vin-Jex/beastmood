// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Hero from "@/components/Home/Hero";
import LatestRelease from "@/components/Home/LatestRelease";
import Specials from "@/components/Home/Specials/Specials";
import Rating from "@/components/Home/Rating";
import Features from "@/components/Home/Features";
import Meta from "@/components/Meta";
import Populate from "@/components/Home/Populate";
import Subscricbe from "@/components/Home/Subscribe";
import Headlines from "@/components/Home/Headlines";
import Footer from "@/components/Layout/Footer/Footer";
import Layout from "@/components/Layout/Layout";
import MangaSwiper, { MangaItemsType } from "@/components/Molecules/MangaSwiper";
import Img1 from "@/public/images/Onepiece-small-1.png";

export const swipData: MangaItemsType[] = [
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

export default function Home() {
  return (
    <Layout>
      <Hero />
      <MangaSwiper
        title='Latest Release'
        subtitle='Checkout the latest and trending collections'
        items={swipData}
        navigationLink='/mangas/'
        pagination={true}
      />
      <Specials />
      <Rating />
      <Features />
      <MangaSwiper
        title='popular reads'
        items={swipData}
        navigationLink='/mangas/'
        pagination={false}
      />
      <Subscricbe />
      <Headlines />
    </Layout>
  );
}
