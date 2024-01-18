/** @type {import('next').NextConfig} */

// const ContentSecurityPolicy = `
//   default-src 'self';
//   script-src 'self' 'random-nonce-value';
//   child-src simbio.dot9.dev;
//   style-src 'self' simbio.dot9.dev;
//   font-src 'self';
// `;

const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  transpilePackages: ["echarts"],
  devIndicators: {
    buildActivityPosition: "top-right",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "simbio.dot9.dev",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        // port: '',
        // pathname: '/my-bucket/**',
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        // pathname: '/my-bucket/**',
      },
    ],
  },
  // experimental: {
  //     instrumentationHook: true
  // },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
  headers: async () => {
    return [
      {
        source: "/",
        headers: [
          {
            key: "X-Developed-By",
            value: "Dot9",
          },
          {
            key: "X-Developed-By-Url",
            value: "https://dot9.dev",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Permissions-Policy",
            value: " geolocation=(), browsing-topics=()",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          // {
          //     key: "Content-Security-Policy",
          //     value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
          // },
        ],
      },
    ];
  },
};
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === process.env.BUNDLE_ANALYZE || "false",
});

module.exports = withBundleAnalyzer(withPWA(nextConfig));
