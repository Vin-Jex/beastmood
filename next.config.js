/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  domains: ["lh3.googleusercontent.com"],
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
};

module.exports = nextConfig;
