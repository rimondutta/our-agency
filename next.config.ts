import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      "react-helmet-async": "./src/shims/react-helmet-async.tsx",
      "react-router-dom": "./src/shims/react-router-dom.tsx",
      "/assets": "./public/assets",
    },
  },
  webpack: (config, { webpack }) => {
    config.resolve.alias["react-helmet-async"] = path.resolve(
      process.cwd(),
      "src/shims/react-helmet-async.tsx"
    );
    config.resolve.alias["react-router-dom"] = path.resolve(
      process.cwd(),
      "src/shims/react-router-dom.tsx"
    );
    config.resolve.alias["/assets"] = path.resolve(
      process.cwd(),
      "public/assets"
    );
    // Removed VITE_BACKEND_URL shim as we are moving to relative API routes
    
    return config;
  },
};

export default nextConfig;
