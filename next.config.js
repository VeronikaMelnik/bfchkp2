const path = require("path");

const nextReactSvgConfig = {
  include: path.resolve(__dirname, "src/shared/ui/Icon/assets"),
};
const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  env: {},
};

module.exports = nextConfig;
