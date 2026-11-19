import type { Person, WebSite } from "schema-dts";

import { SITE_INFO } from "@/config/site";
import { USER } from "@/data/user";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";

export const PERSON_ID = `${SITE_INFO.url}/#person`;
export const WEBSITE_ID = `${SITE_INFO.url}/#website`;
export const ORCID_URL = `https://orcid.org/${USER.orcid}`;

/** Turn a site-relative path into an absolute URL on the canonical host. */
export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_INFO.url}${path.startsWith("/") ? "" : "/"}${path}`;
}

/** Serialise JSON-LD for a <script type="application/ld+json"> tag. */
export function toJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function getPersonJsonLd(): Person {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: USER.displayName,
    givenName: USER.firstName,
    familyName: USER.lastName,
    alternateName: USER.username,
    url: SITE_INFO.url,
    image: absoluteUrl(USER.avatar),
    jobTitle: USER.jobTitle,
    description: USER.bio,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "ORCID",
      value: USER.orcid,
      url: ORCID_URL,
    },
    sameAs: [...SOCIAL_LINKS.map((item) => item.href), ORCID_URL],
  };
}

export function getWebSiteJsonLd(): WebSite {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    alternateName: [USER.username],
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
  };
}

/** WebSite and Person, emitted once per page from the root layout. */
export function getSiteGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [getWebSiteJsonLd(), getPersonJsonLd()],
  };
}

/** BreadcrumbList for a page, from (name, path) pairs starting at the home page. */
export function getBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
