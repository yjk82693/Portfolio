/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/yjk82693/Portfolio/main/my-portfolio/public/images/**",
      },
    ],
  },
};

export default nextConfig;
