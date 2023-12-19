/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  //output: 'standalone', // mine worked fine without this line
  // ... other config
  // reactStrictMode: true,
};

module.exports = nextConfig;
