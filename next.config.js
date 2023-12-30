/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "avt.mkklcdnv6temp.com",
      "bumn2.mkklcdnv6temp.com",
      "imagesfull.mgicdn.com",
    ],
  },
  domains: ["lh3.googleusercontent.com"],
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
};

module.exports = {
  nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avt.mkklcdnv6temp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bumn2.mkklcdnv6temp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imagesfull.mgicdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
