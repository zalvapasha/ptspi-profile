import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Or 'http' if needed, but 'https' is recommended
        hostname: "**", // This wildcard allows all hostnames
        // You can optionally add port and pathname if needed, e.g.,
        // port: '',
        // pathname: '/path/to/images/**',
      },
    ],
  },
};

export default nextConfig;
