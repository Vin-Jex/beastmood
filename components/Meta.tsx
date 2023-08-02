import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import PropTypes from "prop-types";
import { StaticImageData } from "next/image";

interface MetaInterface {
  title?: string;
  keywords?: string;
  description?: string;
  currentLink?: string;
  imageUrl?: string | StaticImageData;
  imageAlt?: string;
}

const Meta: NextPage<MetaInterface> = ({
  title,
  keywords,
  description,
  currentLink,
  imageUrl,
  imageAlt,
}) => {
  const imageUrlString = imageUrl instanceof Object ? imageUrl.src : imageUrl;
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, viewport-fit=cover'
      />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
      <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='../../public/site.webmanifest'></link>
      <title>{title}</title>

      {/* <!-- Open Graph Meta Tags --> */}
      <meta property='og:url' content={currentLink} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={imageUrlString} />
      <meta property='og:image:alt' content={imageAlt} />
    </Head>
  );
};

Meta.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
  currentLink: PropTypes.string,
};

Meta.defaultProps = {
  title: "beastmood",
  keywords:
    "anime, manga, character, Manga, anime, manwha, beastmood, beast, Naruto, one piece, attack on Titan, black clover",
  description: "beastmood is a manga website",
  currentLink: `https://beastmood.com/`,
};

export default Meta;
