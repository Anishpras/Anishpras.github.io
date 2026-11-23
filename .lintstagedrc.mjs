/**
 * @type {import('lint-staged').Configuration}
 */
const lintStagedConfig = {
  "*.{js,mjs,ts,tsx,astro}": ["eslint --fix", "prettier --write"],
  "*.{md,mdx}": "prettier --write",
};

export default lintStagedConfig;
