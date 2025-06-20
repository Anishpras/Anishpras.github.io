/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': './src',
      '@/components': './src/components',
      '@/lib': './src/lib',
      '@/styles': './src/styles',
      '@/config': './src/config',
      '@/hooks': './src/hooks',
      '@/utils': './src/utils',
    };
    return config;
  },
};

module.exports = nextConfig;
