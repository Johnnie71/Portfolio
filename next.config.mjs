/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'downloads.ctfassets.net',
      },
    ],
  },
  webpack(config, { isServer }) {
    // Handle GLSL files as raw strings
    config.module.rules.push({
      test: /\.(glsl|vs|fs|frag|vert)$/,
      type: 'asset/source', // Webpack 5 native loader for raw file types
    });

    return config;
  },
};

export default nextConfig;
