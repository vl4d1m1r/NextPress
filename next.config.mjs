/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WORDPRESS_DOMAIN],
  },
  env: {
    DOMAIN: process.env.DOMAIN,
    WORDPRESS_DOMAIN: process.env.WORDPRESS_DOMAIN,
    WORDPRESS_API_PATH: process.env.WORDPRESS_API_PATH,
  },
};

export default nextConfig;
