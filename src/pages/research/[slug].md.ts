import type { APIRoute, GetStaticPaths } from "astro";

import { RESEARCH } from "@/features/profile/data/research";
import { markdownResponse, researchPaperMd } from "@/lib/markdown-docs";

export const getStaticPaths = (() =>
  RESEARCH.map((paper) => ({
    params: { slug: paper.slug },
    props: { paper },
  }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) =>
  markdownResponse(`${researchPaperMd(props.paper, 1)}\n`);
