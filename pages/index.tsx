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
import MangaSwiper, {
  MangaItemsType,
} from "@/components/Molecules/MangaSwiper";
import Img1 from "@/public/images/Onepiece-small-1.png";
import LoginPopup from "@/components/Molecules/LoginPopup";
import { useState } from "react";

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
  const [modalState, setModalState] = useState<{
    openCategoryModal: boolean;
    warningModal: boolean;
  }>({
    openCategoryModal: false,
    warningModal: false,
  });
  const handleModal = () => {
    setModalState((prevState) => ({
      ...prevState,
      openCategoryModal: !prevState.openCategoryModal,
    }));
  };

  return (
    <Layout>
      <LoginPopup handleModal={handleModal} modalState={modalState} />
      <Hero handleModal={handleModal} modalState={modalState} />
      <MangaSwiper
        handleModal={handleModal}
        modalState={modalState}
        title='Latest Release'
        subtitle='Checkout the latest and trending collections'
        navigationLink='/mangas/'
        pagination={true}
      />
      <Specials handleModal={handleModal} modalState={modalState} />
      <Rating handleModal={handleModal} modalState={modalState} />
      <Features handleModal={handleModal} modalState={modalState} />
      <MangaSwiper
        handleModal={handleModal}
        modalState={modalState}
        title='popular reads'
        parameter='?orby=topview'
        navigationLink='/mangas/'
        pagination={false}
      />
      <Subscricbe />
      <Headlines handleModal={handleModal} modalState={modalState} />
    </Layout>
  );
}
