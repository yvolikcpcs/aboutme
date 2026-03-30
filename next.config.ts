import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive, nosnippet',
          },
        ],
      },
    ];
  },
  // Turbopack is now a top-level citizen in Next.js 16
  turbopack: {
    resolveAlias: {
      // your aliases if any
    },
    // If the types still complain, we can use the 'any' escape hatch 
    // for the root property specifically, as it's an environment fix.
    // @ts-ignore
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;