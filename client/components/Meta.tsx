import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import PropTypes from "prop-types";

interface Meta {
  title?: string;
  keywords?: string;
  description?: string;
}

const Meta: NextPage<Meta> = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='keywords' content={keywords ? keywords : ""} />
      <meta name='description' content={description} />
      <meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
      <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      <title>{title}</title>
    </Head>
  );
};

Meta.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
};

Meta.defaultProps = {
  title: "Beastmode",
  keywords:
    "anime, manga, character, Manga, anime, manwha, beastmode, beast, Naruto, one piece, attack on Titan, black clover",
  description: "Beastmode is a manga website",
};

export default Meta;



// We have two apis [providers]
// -- API 1 > Few Manga, id, description XXXXXXX
//  -- API 2 > All Manga,
