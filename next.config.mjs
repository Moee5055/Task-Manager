/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "supabase.com",
        port: "",
        pathname: "/Images/**",
      },
    ],
  },
};

export default nextConfig;
