import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Add an explicit (empty) turbopack config so Next doesn't error when a
  // custom webpack config is present. This tells Next we intentionally
  // acknowledge Turbopack but are providing a webpack customization.
  turbopack: {},

  webpack: (config) => {
    if (config.resolve) {
      // Ensure '@' resolves to the project root so imports like '@/components/..' work
      // Works around environments where TS path mappings aren't picked up by the bundler
      // (for example some Turbopack/webpack setups).
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      config.resolve.alias = {
        // preserve existing aliases
        ...(config.resolve.alias || {}),
        '@': path.resolve(__dirname),
      };
    }
    return config;
  },
};

export default nextConfig;
