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

export default function Home() {
  return (
    <Layout>
      <Hero />
      <LatestRelease />
      <Specials />
      <Rating />
      <Features />
      <Populate />
      <Subscricbe />
      <Headlines />
    </Layout>
  );
}
