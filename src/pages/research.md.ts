import { markdownResponse, researchMd } from "@/lib/markdown-docs";

export const GET = () => markdownResponse(researchMd());
