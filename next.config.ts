import type { NextConfig } from "next";

const SITE_URL = process.env.APP_URL || "https://www.anishprashun.me";

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

/** The Markdown twins point search engines at their HTML page as the canonical. */
function markdownCanonical(source: string, htmlPath: string) {
  return {
    source,
    headers: [
      { key: "Link", value: `<${SITE_URL}${htmlPath}>; rel="canonical"` },
    ],
  };
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.anishprashun.me",
        port: "",
      },
    ],
  },
  async headers() {
    return [
      { source: "/:path*", headers: SECURITY_HEADERS },
      markdownCanonical("/about.md", "/"),
      markdownCanonical("/experience.md", "/"),
      markdownCanonical("/projects.md", "/"),
      markdownCanonical("/awards.md", "/"),
      markdownCanonical("/certifications.md", "/"),
      markdownCanonical("/research.md", "/research"),
      markdownCanonical("/blog.md", "/blog"),
      markdownCanonical("/blog/:slug.md", "/blog/:slug"),
    ];
  },
  async rewrites() {
    return [
      {
        source: "/blog/:slug.md",
        destination: "/blog.md/:slug",
      },
    ];
  },
};

export default nextConfig;
