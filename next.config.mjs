/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ixgnekopnrhcnlbozxtv.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/Images/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        "https://9bk90r20-3000.inc1.devtunnels.ms/",
        "localhost:3000",
      ],
    },
  },
};

export default nextConfig;
