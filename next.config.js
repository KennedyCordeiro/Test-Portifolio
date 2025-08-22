/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.placeholder.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
