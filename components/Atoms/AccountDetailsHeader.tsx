import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BookmarkBorderOutlined,
  FormatListBulletedOutlined,
  HistoryOutlined,
  Message,
  Settings,
} from "@mui/icons-material";

const navItems = [
  {
    title: "favourite",
  },
  {
    title: "my lists",
  },
  {
    title: "history",
  },
  {
    title: "notifications",
  },
  {
    title: "my account",
  },
];

const AccountDetailsHeader = ({
  setActiveNav,
}: {
  setActiveNav: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const router = useRouter();
  const itemsToRender = navItems.slice(0, -1);

  const Icon = (title: string) => {
    const iconReturn =
      title === "favourite" ? (
        <BookmarkBorderOutlined />
      ) : title === "my lists" ? (
        <Message />
      ) : title === "history" ? (
        <HistoryOutlined />
      ) : title === "notifications" ? (
        <FormatListBulletedOutlined />
      ) : (
        <Settings />
      );

    return iconReturn;
  };

  return (
    <>
      <nav className='w-[80%] sm:w-[1290px] flex items-center justify-center bg-[#FF5E03] border-b-[0.5px] border-white shadow-[0px_4.18831px_16.75325px_0px_rgba(17,_34,_17,_0.05)] rounded-lg overflow-hidden'>
        {itemsToRender.map((item) => {
          return (
            <Link
              href={`/account/${item.title}`}
              className={`relative py-4 border-b-4 rounded-sm ${
                router.query.accountDetails === item.title &&
                "!border-yellow-400"
              } border-transparent w-full h-full`}
              key={item.title}
              onClick={() => setActiveNav(item.title)}
            >
              <div className='text-[#F4FAF8] text-base font-bold md:border-r-2 w-full pl-4'>
                <span className='capitalize hidden md:inline-block'>
                  {item.title}
                </span>
                <span className='capitalize inline-block md:hidden'>
                  {Icon(item.title)}
                </span>
              </div>
            </Link>
          );
        })}
        <Link
          href={`/account/${navItems[navItems.length - 1].title}`}
          onClick={() => setActiveNav(navItems[navItems.length - 1].title)}
          className={`px-4 py-4 border-b-4 rounded-sm duration-300 transition ${
            router.query.accountDetails ===
              navItems[navItems.length - 1].title && "!border-yellow-400"
          } border-transparent w-full`}
        >
          <div className='text-[#F4FAF8] text-base font-bold w-full capitalize'>
            <span className='capitalize hidden md:inline-block'>
              {navItems[navItems.length - 1].title}
            </span>
            <span className='capitalize inline-block md:hidden'>
              {Icon(navItems[navItems.length - 1].title)}
            </span>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default AccountDetailsHeader;
