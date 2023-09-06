/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  optimizeFonts: true,
  //  включает минификацию кода с помощью SWC вместо Terser. Это более быстрый минификатор кода.
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
        'cdn.imagin.studio',
    ],
  },
};

module.exports = nextConfig;
