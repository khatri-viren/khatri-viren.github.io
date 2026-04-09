/** Canonical site origin (GitHub Pages). */
export const SITE_URL = "https://khatri-viren.github.io";

export const OG_IMAGE_PATH = "/og-image.jpg";

export const absoluteOgImageUrl = `${SITE_URL}${OG_IMAGE_PATH}`;

export const LINKEDIN_URL = "https://www.linkedin.com/in/khatriviren";

export const GITHUB_URL = "https://github.com/khatri-viren";

export const INSTAGRAM_URL = "https://www.instagram.com/v__rain/";

export type RouteSeo = {
  path: string;
  title: string;
  description: string;
  ogImageAlt: string;
};

/** Aligned with resume, LinkedIn, and on-page copy (About, Data). */
const homeSeo: RouteSeo = {
  path: "/",
  title: "Viren Khatri — Full-Stack Engineer & Technology Leader | Pune",
  description:
    "Full-stack engineer and technology leader in Pune. JavaScript/TypeScript, React, Next.js, Node.js — AI systems, no-code builders, workflow automation, and SaaS. Former Co-Founder & CTO at WorqHat. B.Tech CSE, MIT-WPU.",
  ogImageAlt: "Viren Khatri — full-stack engineer and technology leader based in Pune, India",
};

const portfolioSeo: RouteSeo = {
  path: "/portfolio",
  title: "Portfolio | Viren Khatri — Projects & Work",
  description:
    "Selected projects by Viren Khatri: full-stack apps, SaaS, and engineering work spanning React, Next.js, distributed backends, and AI-powered products.",
  ogImageAlt: "Portfolio preview — Viren Khatri",
};

const hobbiesSeo: RouteSeo = {
  path: "/hobbies",
  title: "Sketches & Artwork | Viren Khatri",
  description:
    "Sketches and personal artwork by Viren Khatri — full-stack engineer and technology leader based in Pune.",
  ogImageAlt: "Artwork and sketches by Viren Khatri",
};

const privacySeo: RouteSeo = {
  path: "/privacy",
  title: "Privacy Policy | Viren Khatri",
  description:
    "Privacy policy for khatri-viren.github.io: analytics with Umami, contact form via EmailJS, and how information is handled.",
  ogImageAlt: "Privacy policy — Viren Khatri",
};

const ROUTES: RouteSeo[] = [homeSeo, portfolioSeo, hobbiesSeo, privacySeo];

export function normalizePathname(pathname: string): string {
  const p = pathname.replace(/\/$/, "") || "/";
  const match = ROUTES.find((r) => r.path === p);
  return match ? p : "/";
}

export function getSeoForPathname(pathname: string): RouteSeo {
  const normalized = normalizePathname(pathname);
  return ROUTES.find((r) => r.path === normalized) ?? homeSeo;
}

export function canonicalUrl(pathname: string): string {
  const normalized = normalizePathname(pathname);
  return normalized === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}

const personDescription =
  "Full-stack engineer and technology leader in Pune. Builds scalable products across the JavaScript/TypeScript stack (React, Next.js, Node.js), including AI-powered platforms, no-code builders, workflow automation, and SaaS. Former Co-Founder & CTO at WorqHat.";

export function buildPersonJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Viren Khatri",
    url: `${SITE_URL}/`,
    jobTitle: "Full-Stack Engineer & Technology Leader",
    description: personDescription,
    sameAs: [LINKEDIN_URL, GITHUB_URL, INSTAGRAM_URL],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "MIT World Peace University",
    },
    knowsAbout: [
      "Full-stack development",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Workflow automation",
      "No-code platforms",
      "AI-powered products",
      "SaaS",
      "Cloud infrastructure",
      "IoT",
    ],
  };
}
