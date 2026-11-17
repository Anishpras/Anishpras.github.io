import { USER } from "@/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  // Production sets APP_URL; the apex domain 308-redirects to www.
  url: process.env.APP_URL || "https://www.anishprashun.me",
  ogImage: USER.ogImage,
  // Meta description (about 160 characters); USER.bio stays the on-page tagline.
  description:
    "Anish Prashun, software engineer and engineering lead building AI platforms, voice AI and privacy-first systems. Portfolio, AI agent research and blog.",
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Prasfolio",
    href: "/",
  },
  {
    title: "Research",
    href: "/research",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/Anishpras/Anishpras.github.io";

export const UTM_PARAMS = {
  utm_source: "anishprashun.me",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
