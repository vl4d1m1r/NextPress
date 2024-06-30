/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["vl4di11ir.pw"],
  },
  env: {
    DOMAIN: process.env.DOMAIN,
  },
};

export default nextConfig;
