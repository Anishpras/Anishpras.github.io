import type { Element, Root } from "hast";
import { visit } from "unist-util-visit";

import { addQueryParams } from "@/utils/url";

/** Append UTM params to outbound links in Markdown content. */
export function rehypeAddQueryParams(params: Record<string, string>) {
  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "a") return;

      const href = node.properties?.href;
      if (
        typeof href !== "string" ||
        href.startsWith("/") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#")
      ) {
        return;
      }

      node.properties.href = addQueryParams(href, params);
    });
  };
}
