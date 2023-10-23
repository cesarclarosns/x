import "./env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        hostname: "i.pinimg.com",
      },
    ],
  },
};

export default nextConfig;
