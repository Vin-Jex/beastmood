import React, { useEffect, useState } from "react";
import Empty from "@/components/Atoms/Empty";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import Profile from "@/public/images/profile.png";
import AccountImage from "@/public/images/account.png";
import { BASE_URL } from "@/components/Atoms/fetchApi";
import Link from "next/link";
import AccountDetailsHeader from "@/components/Atoms/AccountDetailsHeader";

const MangaDetails = () => {
  const [activeNav, setActiveNav] = useState("Favourite");
  const [mangasData, setMangasData] = useState([]);
  const [parameter, setParameter] = useState("");

  useEffect(() => {
    fetchManga();
  }, []);

  const fetchManga = async () => {
    const apiUrl =
      parameter !== ""
        ? `${BASE_URL}/get_external_mangas${parameter}`
        : `${BASE_URL}/get_external_mangas`;
    try {
      const response = await fetch(apiUrl);
      const responseData = await response.json();

      if (!response.ok) {
        console.log("Response: ", responseData);
      }

      setMangasData(responseData.data[0].data);
    } catch (error) {
    } finally {
    }
  };

  return (
    <Layout>
      <header className='flex items-center justify-center my-14'>
        <AccountDetailsHeader setActiveNav={setActiveNav} />
      </header>

      <div className='px-[75px]'>
        {!mangasData ? (
          <Empty>
            <Image
              src={activeNav !== "My Account" ? Profile : AccountImage}
              alt='profile'
              className='w-[12em] md:w-72 ml-10 md:ml-14'
            />
            <p className='text-base sm:text-lg text-dark/95 dark:text-light w-full text-center'>
              You don&apos;t have any
              {activeNav.split(" ").length > 1
                ? activeNav.split(" ")[1].toLowerCase()
                : activeNav.toLowerCase()}
              yet
            </p>
            {activeNav !== "My Account" && (
              <button className='px-8 py-4 bg-[#FF5E03] rounded-md text-light capitalize'>
                Add{" "}
                {activeNav.split(" ").length > 1
                  ? activeNav.split(" ")[1].toLowerCase()
                  : activeNav.toLowerCase()}
              </button>
            )}
          </Empty>
        ) : (
          <div className='flex flex-wrap items-center gap-12 px-3 py-4 md:p-10 space-y-7'>
            {mangasData?.map(
              ({ id, img, title, chapter, genre, host_name, views, index }) => {
                return (
                  <Link
                    href='/mangas/[mangaId]/[host_name]'
                    as={`/mangas/${id}/${host_name}`}
                    className='card card-container !mx-0'
                    key={index}
                  >
                    <Image
                      width='100000'
                      height='100000'
                      src={img}
                      alt={title}
                    />

                    <div>
                      <span>{title}</span>
                      <p>{chapter}</p>
                    </div>

                    <span>{views}</span>
                  </Link>
                );
              }
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MangaDetails;
