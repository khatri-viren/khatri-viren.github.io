import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import {
  absoluteOgImageUrl,
  buildPersonJsonLd,
  canonicalUrl,
  getSeoForPathname,
} from "./site";

export function SeoHead() {
  const { pathname } = useLocation();
  const seo = getSeoForPathname(pathname);
  const canonical = canonicalUrl(pathname);
  const jsonLd = buildPersonJsonLd();

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={absoluteOgImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={seo.ogImageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={absoluteOgImageUrl} />
      <meta name="twitter:image:alt" content={seo.ogImageAlt} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Helmet>
  );
}
