/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com', 'images.unsplash.com'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    dirs: ['src'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    esmExternals: false,
  },
  webpack: (config) => {
    config.ignoreWarnings = [
      { module: /node_modules\/@next\/next/ },
    ];
    return config;
  },
  // Ensure port 3000 is always used
  serverOptions: {
    port: 3000,
  },
}

module.exports = nextConfig 