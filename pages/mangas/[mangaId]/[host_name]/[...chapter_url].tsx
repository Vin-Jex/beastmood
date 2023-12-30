import { BASE_URL } from "@/components/Atoms/fetchApi";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ChapterUrl = () => {
  const params = useRouter();
  const { url } = params.query;
  const [mangasData, setMangasData] = useState([]);

  useEffect(
    () => () => {
      const fetchManga = async () => {
        // console.log("Hostname: ", mangaId);
        try {
          const apiUrl = `${BASE_URL}/get_chapter_images`;
          const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "*/*",
              url: url as string,
            },
          });
          const responseData = await response.json();

          if (!response.ok) {
            console.log("Response: ", responseData);
          }

          console.log("Response: ", responseData);
          setMangasData(responseData.data);
        } catch (error) {
        } finally {
          console.log("Data: ", mangasData);
        }
      };

      fetchManga();
    },
    [mangasData, url]
  );

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center'>
        {mangasData?.map(({ img, pageTitle }) => {
          return (
            <picture key={pageTitle}>
              <source srcSet={img} type='image/*' />
              <source srcSet={img} type='image/*' />
              <img
                src={img}
                alt={pageTitle}
                width='100000'
                height='100000'
                className='max-w-[1200px] w-[1200px] object-cover'
              />
            </picture>
          );
        })}
      </div>
    </Layout>
  );
};

export default ChapterUrl;
