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
  devIndicators: {
    buildActivityPosition: "top-right",
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

module.exports = nextConfig;
