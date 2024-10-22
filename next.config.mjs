/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WORDPRESS_DOMAIN, "secure.gravatar.com"],
  },
  env: {
    DOMAIN: process.env.DOMAIN,
    WORDPRESS_DOMAIN: process.env.WORDPRESS_DOMAIN,
  },
};

export default nextConfig;
