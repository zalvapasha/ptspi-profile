import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
