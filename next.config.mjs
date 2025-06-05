// next.config.mjs (or .js)
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // This is correct for static export
  images: {
    unoptimized: true, // Good for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig; // For .mjs
// module.exports = nextConfig; // For .js