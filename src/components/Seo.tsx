import { useEffect } from "react";

const SITE_NAME = "Utagba-Ogbe Technical College";
const SITE_URL = "https://utagbatechnicalcollege.com.ng";
const SOCIAL_IMAGE = `${SITE_URL}/social-banner.png`;

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  structuredData?: Record<string, unknown>;
}

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }
  element.href = href;
}

export default function Seo({
  title,
  description,
  path = "/",
  noIndex = false,
  type = "website",
  structuredData,
}: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`;
    const canonical = new URL(path, SITE_URL).toString();

    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", SOCIAL_IMAGE);
    upsertMeta("property", "og:image:alt", `${SITE_NAME} social banner`);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", SOCIAL_IMAGE);
    upsertCanonical(canonical);

    const scriptId = "page-structured-data";
    document.getElementById(scriptId)?.remove();
    if (structuredData && !noIndex) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [description, noIndex, path, structuredData, title, type]);

  return null;
}

export { SITE_NAME, SITE_URL };
