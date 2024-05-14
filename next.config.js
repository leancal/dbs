module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },

  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['aiwaelectronics.com.ar', 'www.aiwaelectronics.com.ar'],
    unoptimized: true
  }
};
