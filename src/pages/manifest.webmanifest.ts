import { SITE_INFO } from "@/config/site";

export const GET = () =>
  new Response(
    JSON.stringify({
      short_name: SITE_INFO.name,
      name: SITE_INFO.name,
      description: SITE_INFO.description,
      icons: [
        {
          src: "/favicon.svg",
          type: "image/svg+xml",
          sizes: "any",
          purpose: "any",
        },
        {
          src: "/icon-192x192.png",
          type: "image/png",
          sizes: "192x192",
          purpose: "any",
        },
        {
          src: "/icon-512x512.png",
          type: "image/png",
          sizes: "512x512",
          purpose: "any",
        },
        {
          src: "/maskable-icon.png",
          type: "image/png",
          sizes: "512x512",
          purpose: "maskable",
        },
      ],
      id: "/?utm_source=pwa",
      start_url: "/?utm_source=pwa",
      display: "standalone",
      scope: "/",
      theme_color: "#ffffff",
      background_color: "#ffffff",
    }),
    { headers: { "Content-Type": "application/manifest+json" } }
  );
