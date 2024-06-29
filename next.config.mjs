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
};

export default nextConfig;
