/** @type {import('next').NextConfig} */
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "img-src 'self' data: https: blob:",
  "font-src 'self' data: https:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' https://static.sketchfab.com https://sketchfab.com",
  "connect-src 'self' https://api.resend.com https://sketchfab.com https://www.google.com https://maps.googleapis.com",
  "frame-src 'self' https://sketchfab.com https://www.google.com https://www.google.com/maps",
  "media-src 'self' blob: data:",
  "object-src 'none'",
  "upgrade-insecure-requests"
].join("; ");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "instagram.fcdn.net"
      },
      {
        protocol: "https",
        hostname: "shop.coptrz.com"
      },
      {
        protocol: "https",
        hostname: "commons.wikimedia.org"
      }
    ]
  },
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" }
        ]
      }
    ];
  }
};

export default nextConfig;
