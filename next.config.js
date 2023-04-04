/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [],
    formats: ["image/avif", "image/webp"]
  }
};

module.exports = nextConfig;
