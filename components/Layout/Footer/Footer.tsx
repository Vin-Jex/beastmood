import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import Logo from "@/public/images/logo2.png";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface Link {
  text: string;
  link: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> | any;
}

interface FooterLinks {
  [key: string]: Link[];
}
const footerLinks: FooterLinks = {
  connect: [
    {
      text: "Connect One",
      link: "/",
    },
    {
      text: "Connect Two",
      link: "/",
    },
    {
      text: "Connect Three",
      link: "/",
    },
    {
      text: "Connect Four",
      link: "/",
    },
  ],
  about: [
    {
      text: "Privacy Policy",
      link: "/",
    },
    {
      text: "Terms of Service",
      link: "/",
    },
    {
      text: "Product Information",
      link: "/",
    },
    {
      text: "Pricing Margins",
      link: "/",
    },
  ],
  socials: [
    {
      text: "Facebook",
      link: "/",
      icon: Facebook,
    },
    {
      text: "Twitter",
      link: "/",
      icon: Twitter,
    },
    {
      text: "Instagram",
      link: "/",
      icon: Instagram,
    },
    {
      text: "LinkedIn",
      link: "/",
      icon: LinkedIn,
    },
  ],
};

const Footer = () => {
  return (
    <footer className='pt-10 px-4 md:px-12 flex flex-col space-y-12 divide-y divide-blue-300 font-montserrat container mx-auto my-auto'>
      <div className='flex flex-col justify-center'>
        <div className='cursor-pointer w-fit'>
          <Link href='/'>
            <Image src={Logo} alt='Logo' className='w-[6em]' />
          </Link>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-11 w-full justify-evenly items-start'>
          <div className='col-span-4 flex flex-col space-y-6 w-full py-6 justify-start'>
            <span className='text-dark text-base sm:text-lg'>
              Join our newsletter to stay up to date on features and releases.
            </span>

            <form className='flex space-x-3 w-full'>
              <input
                type='text'
                className='bg-light text-dark placeholder:text-lg font-montserrat p-3 md:p-4 w-full border-2 border-dark focus:outline-none'
                placeholder='Enter your email'
              />
              <button className='border-2 border-dark text-dark py-2 md:py-4 px-4 md:px-10'>
                Subscribe
              </button>
            </form>

            <Link href='/' className='text-dark underline underline-offset-2'>
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </Link>
          </div>

          <div className='col-span-7 w-full h-full px-0 lg:px-20 flex flex-col sm:flex-row space-y-8 sm:space-y-0 justify-between '>
            <div className='flex space-x-10'>
              <ul className='flex flex-col'>
                <li className='text-xl text-dark/90 font-bold capitalize whitespace-nowrap mb-2'>
                  Connect with us
                </li>
                {footerLinks?.connect?.map(({ text, link }, index) => {
                  return (
                    <li
                      className='text-base text-dark/90 font-medium capitalize my-1'
                      key={index}
                    >
                      <Link href={link} className='text-lg'>
                        {text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className='flex flex-col'>
                <li className='text-xl text-dark/90 font-bold capitalize whitespace-nowrap mb-2'>
                  about
                </li>
                {footerLinks?.about?.map(({ text, link }, index) => {
                  return (
                    <li
                      className='text-base text-dark/90 font-medium capitalize my-1'
                      key={index}
                    >
                      <Link href={link} className='text-lg'>
                        {text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className=''>
              <ul className='flex flex-col'>
                <li className='text-xl text-dark/90 font-bold capitalize whitespace-nowrap mb-2'>
                  follow us
                </li>
                {footerLinks.socials.map(
                  ({ text, link, icon: Icon }, index) => {
                    return (
                      <li
                        className=' flex text-base text-dark font-medium capitalize my-1'
                        key={index}
                      >
                        <Link
                          href={link}
                          className='text-lg space-x-4 flex items-center'
                        >
                          <Icon className='mr-4' />
                          {text}
                        </Link>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col-reverse sm:flex-row justify-between px-0 md:px-14 py-4 sm:py-10'>
        <span className='text-dark text-base sm:text-base my-2 sm:my-0'>
          &copy; {new Date().getFullYear()}, All rights reserved
        </span>

        <div className='flex gap-x-8'>
          <span className='text-dark text-base md:text-lg underline underline-offset-2'>
            Privacy Policy
          </span>
          <span className='text-dark text-base md:text-lg underline underline-offset-2'>
            Term of Service
          </span>
          <span className='text-dark text-base md:text-lg underline underline-offset-2'>
            Cookies Settings
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
