/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const NextConfig = {
  reactStrictMode: true,
  i18n,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = NextConfig;
