const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // output: "export", // disabled for local dev (re-enable for production deployment)
  basePath: "/an-solutions",
  assetPrefix: "/an-solutions",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
