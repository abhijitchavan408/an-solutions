const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  basePath: "/an-solutions",
  assetPrefix: "/an-solutions",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
