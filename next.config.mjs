/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        {
          protocol: "https",
          hostname: "web-factory.io",
        },
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'srv930691.hstgr.cloud' }
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;