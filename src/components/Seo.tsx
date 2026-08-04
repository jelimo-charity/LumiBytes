import { Helmet } from "react-helmet-async";
import {
  SITE_URL,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_TYPE,
  DEFAULT_TITLE,
} from "@/seo/site";

type SeoProps = {
  title?: string;
  description?: string;
  /**
   * Path relative to SITE_URL. Example: "/" or "/articles"
   */
  path?: string;
  /**
   * Absolute URL preferred. If omitted, SEO still works (no og:image).
   */
  imageUrl?: string;
  /**
   * Prevent indexing for non-public routes (auth, 404).
   */
  noindex?: boolean;
  /**
   * Adds Schema.org Person JSON-LD (best on homepage).
   */
  includePersonJsonLd?: boolean;
};

function absolutize(pathname: string) {
  const base = new URL(SITE_URL);
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(normalized, base).toString();
}

export function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  imageUrl = DEFAULT_OG_IMAGE,
  noindex = false,
  includePersonJsonLd = false,
}: SeoProps) {
  const url = absolutize(path);

  const personJsonLd = includePersonJsonLd
    ? {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Charity Jelimo",
        jobTitle: "Data Engineer",
        url: SITE_URL,
        sameAs: [
          "https://www.linkedin.com/in/charity-jelimo/",
          "https://github.com/jelimo-charity",
        ],
      }
    : null;

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Charity Jelimo" />

      <link rel="canonical" href={url} />

      {/* Crawlers */}
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />
      <meta
        name="googlebot"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={DEFAULT_OG_TYPE} />
      {imageUrl ? (
        <>
          <meta property="og:image" content={imageUrl} />
          <meta property="og:image:alt" content={title} />
        </>
      ) : null}

      {/* Twitter */}
      <meta name="twitter:card" content={imageUrl ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}

      {/* JSON-LD */}
      {personJsonLd ? (
        <script type="application/ld+json">
          {JSON.stringify(personJsonLd)}
        </script>
      ) : null}
    </Helmet>
  );
}

