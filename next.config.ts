import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.js");

const nextConfig: NextConfig = {
  images: {
    domains: ['upload.wikimedia.org', 'images.unsplash.com'],
  },
};

export default withNextIntl(nextConfig);