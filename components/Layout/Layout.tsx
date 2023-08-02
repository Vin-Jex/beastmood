import React, { HTMLAttributes, useEffect } from "react";
import Meta from "../Meta";
import Header from "../Atoms/Header";
import Footer from "./Footer/Footer";
import { useRouter } from "next/router";
import AuthHeader from "../Atoms/AuthHeader";

interface LayoutType extends HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  keywords?: string;
  children: React.ReactNode;
  currentLink?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const Layout: React.FC<LayoutType> = ({
  title,
  description,
  keywords,
  children,
  currentLink,
  imageUrl,
  imageAlt,
}) => {
  const router = useRouter();
  const isAuthRoute = router.pathname.includes("/auth");
  return (
    <main className='relative flex flex-col scroll-container overflow-hidden w-full mx-auto my-auto'>
      <Meta
        title={title}
        description={description}
        keywords={keywords}
        currentLink={currentLink}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
      />

      <header className='!bg-main-brand z-40'>
        {isAuthRoute ? <AuthHeader /> : <Header />}
      </header>

      <div className='!min-h-screen container mx-auto my-auto py-14'>{children}</div>
      <footer className='bg-main2-brand'>
        {isAuthRoute ? "" : <Footer />}
      </footer>
    </main>
  );
};

export default Layout;
