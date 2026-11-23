export type PostSource = {
  title: string;
  url: string;
  publisher?: string;
};

export type PostMetadata = {
  title: string;
  description: string;
  image?: string;
  category?: string;
  tags?: string[];
  new?: boolean;
  createdAt: Date;
  updatedAt: Date;
  /** Short answer-first summary shown above the article (and used by AI answer engines). */
  tldr?: string;
  keyTakeaways?: string[];
  sources?: PostSource[];
  noindex?: boolean;
  /** The Markdown body, for `.md` twins, llms-full.txt and word counts. */
  body?: string;
};

export type Post = {
  metadata: PostMetadata;
  slug: string;
};

/** The minimum the command menu needs; keeps post bodies out of island props. */
export type PostLink = {
  slug: string;
  title: string;
  category?: string;
};
