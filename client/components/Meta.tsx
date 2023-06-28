import { NextPage } from "next";
import Head from "next/head";
import React from "react";

interface Meta {
  title: string;
  keywords: string;
  description: string;
}

const Meta: NextPage<Meta> = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
      <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Beastmode",
  keywords: "Beastmode is a manga website",
  description: "",
};

export default Meta;
