import { markdownResponse, projectsMd } from "@/lib/markdown-docs";

export const GET = () => markdownResponse(projectsMd());
