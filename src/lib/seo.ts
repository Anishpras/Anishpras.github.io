import { SITE_INFO } from "@/config/site";

const SUFFIX = ` – ${SITE_INFO.name}`;
const MAX_TITLE = 60;

/**
 * Page <title>: add the " – Anish Prashun" suffix only while the result fits in
 * ~60 characters, so search results don't truncate the part that matters.
 */
export function buildTitle(title?: string) {
  if (!title) return SITE_INFO.defaultTitle;
  return title.length + SUFFIX.length <= MAX_TITLE
    ? `${title}${SUFFIX}`
    : title;
}
