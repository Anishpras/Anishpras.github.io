import { Heading } from "@/components/ui/typography";

/** Element overrides for blog Markdown/MDX, rendered to static HTML. */
export const H2 = (props: React.ComponentProps<"h2">) => (
  <Heading as="h2" {...props} />
);
export const H3 = (props: React.ComponentProps<"h3">) => (
  <Heading as="h3" {...props} />
);
