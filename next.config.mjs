/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Keep this if you plan for static hosting later
  // If it causes issues with your PHP backend setup, you can temporarily comment it out
  // output: 'export', 
  
  images: {
    // Keep this for static export if you use it
    // unoptimized: true, 

    // --- ADD THESE LINES TO ALLOW SVGs ---
    dangerouslyAllowSVG: true, 
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // ------------------------------------

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**', 
      },
      // You can add other trusted domains here in the future
    ],
  },
};

export default nextConfig;