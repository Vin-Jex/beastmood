import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo.png";
import Layout from "../Layout/Layout";

const AuthHeader = () => {
  return (
    <div className='fixed top-0 md:-translate-x-1/2 left-0 md:left-1/2 w-full flex flex-col items-center py-2 text-light h-fit bg-transparent md:bg-main-brand'>
      <Link href='/' className="container md:mx-auto w-fit">
        <Image src={Logo} alt='Logo' className='w-14 object-scale-down' />
      </Link>
    </div>
  );
};

export default AuthHeader;
