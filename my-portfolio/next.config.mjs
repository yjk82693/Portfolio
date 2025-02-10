/** @type {import('next').NextConfig} */

const isGithubPages = process.env.NODE_ENV === 'production';

const basePath = isGithubPages ? '/Portfolio' : ''; // Adjust to your repository name
const assetPrefix = isGithubPages ? '/Portfolio' : ''; // Adjust to your repository name

const nextConfig = {
  basePath,
  assetPrefix,
  output: 'export', // Enable static export
};

export default nextConfig;
