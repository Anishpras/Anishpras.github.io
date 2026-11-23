import { aboutMd, markdownResponse } from "@/lib/markdown-docs";

export const GET = () => markdownResponse(aboutMd());
