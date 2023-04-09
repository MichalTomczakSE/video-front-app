/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['i.ytimg.com', 'img-9gag-fun.9cache.com',],
    formats: ["image/avif", "image/webp"]
  }
};

module.exports = nextConfig;
