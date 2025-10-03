import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["bcrypt"],
  images: {
    domains: ["c.animaapp.com"],
  },
};

export default nextConfig;
