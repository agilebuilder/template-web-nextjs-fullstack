export const siteConfig = {
  name: "<%= projectName %>",
  description: "<%= description %>",
  author: "<%= author %>",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:<%= port %>",
} as const;

export type SiteConfig = typeof siteConfig;
