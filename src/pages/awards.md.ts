import { awardsMd, markdownResponse } from "@/lib/markdown-docs";

export const GET = () => markdownResponse(awardsMd());
