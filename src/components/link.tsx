import type React from "react";

/** Drop-in for the old next/link: Astro is a multi-page site, so a link is an <a>. */
export default function Link({
  prefetch: _prefetch,
  ...props
}: React.ComponentProps<"a"> & { href: string; prefetch?: boolean }) {
  return <a {...props} />;
}
