import saharaPreview from "../../assets/work-ss/saahara.webp";
import worqhatPreview from "../../assets/work-ss/worqhat.webp";
import smartmocksPreview from "../../assets/work-ss/smartmocks.webp";
import shoescape from "../../assets/work-ss/shoescape.webp";
import portfolio from "../../assets/work-ss/portfolio.webp";
import floracare from "../../assets/work-ss/flora-care.png";
import notenest from "../../assets/work-ss/note-nest.png";

export const projectsData = [
  {
    id: 7,
    image: saharaPreview,
    title: "Saahaara",
    category: "web",
    url: "https://saahaara.vercel.app/",
    featured: true,
    desc: "Private memory space for people you love—capture stories, moments, and meaning in one calm, intentional place on the web.",
    longDescription:
      "Sahara is a personal product for preserving memories with the people who matter most. It is designed as a quiet, private space to collect stories and moments over time—so families and close circles can revisit what they have shared without the noise of typical social feeds.\n\nThe experience prioritizes clarity, warmth, and trust: a focused surface for reflection and connection rather than performance or public metrics. Shipped as a web app so it stays easy to open and use across devices.",
    tech: [],
    links: [{ label: "Live site", href: "https://saahaara.vercel.app/" }],
    gallery: [],
  },
  {
    id: 1,
    image: worqhatPreview,
    title: "WorqHat",
    category: "web",
    url: "https://worqhat.com",
    featured: true,
    desc: "No-code / low-code platform: visual workflows, drag-and-drop pages, and authenticated customer portals—multi-tenant SaaS for teams shipping internal tools and external-facing apps.",
    longDescription:
      "WorqHat is a no-code / low-code platform that combines workflow automation, visual app building, and customer portals in one place. Teams design automations with triggers and steps, lay out dashboards and forms on a canvas, and publish secure portals where end users only see their own data.\n\nThe product is built for organizations that need repeatable delivery without reinventing integrations, access control, and governance each time. Capabilities include multi-tenant isolation, role-based access, auditability, and extensibility as customer programs grow.",
    tech: [],
    links: [{ label: "Website", href: "https://worqhat.com" }],
    gallery: [],
  },
  {
    id: 2,
    image: smartmocksPreview,
    title: "SmartMocks",
    category: "web",
    url: "https://smartmocks.com/",
    featured: true,
    desc: "All-in-one AI interview prep: personalized interviews by role and topic, live and per-question assessments (including code), admin analytics, assignments, and proctoring.",
    longDescription:
      "SmartMocks is an end-to-end AI interview preparation platform. Candidates get personalized mock interviews tailored by role, topic, and skill focus, with support for live sessions and granular, per-question evaluation—including technical and code-style assessments where relevant.\n\nOn the operations side, organizations use full admin dashboards: analytics, reporting, and breakdowns by division, department, and program. Teams can assign interviews, track progress, and run proctoring and review workflows so hiring and L&D programs stay consistent at scale.\n\nThe platform is designed for reliability under heavy concurrent use, with timely scoring and feedback for candidates and consistent operational visibility for admins.",
    tech: [],
    links: [{ label: "Live site", href: "https://smartmocks.com/" }],
    gallery: [],
  },
  {
    id: 3,
    image: floracare,
    title: "Flora Care",
    category: "web",
    url: "https://flora-care-v2.vercel.app",
    featured: true,
    desc: "AI-powered hydroponics: ESP32 sensors (TDS, pH, temperature, light), MQTT via EMQX, Express.js ingestion, Firebase real-time data, and a Next.js dashboard. Accompanying MethodsX article (June 2025).",
    longDescription:
      "Flora Care is an end-to-end hydroponics monitoring and automation stack. ESP32 nodes read TDS, pH, temperature, and light; data flows over MQTT through an EMQX broker into an Express.js ingestion layer and Firebase Realtime Database for live dashboards.\n\nA Next.js front end surfaces charts, alerts, and remote control. Relay-driven pumps automate nutrient dosing and circulation from sensor thresholds. A camera path feeds plant imagery into a CNN-backed service for spinach disease cues (e.g. Anthracnose, Downy Mildew), supporting early intervention.\n\nThe full system is described in a peer-reviewed MethodsX protocol (2025), linked below, with emphasis on reproducibility and adaptation to other crops and setups.",
    tech: [
      "Next.js",
      "Express.js",
      "Firebase",
      "MQTT",
      "EMQX",
      "ESP32",
      "CNN / AI",
    ],
    links: [
      { label: "Live site", href: "https://flora-care-v2.vercel.app" },
      {
        label: "GitHub — platform",
        href: "https://github.com/khatri-viren/flora-care-v2",
      },
      {
        label: "GitHub — device",
        href: "https://github.com/khatri-viren/flora-care-device",
      },
      {
        label: "MethodsX article",
        href: "https://doi.org/10.1016/j.mex.2025.103579",
      },
      {
        label: "PMC (open access)",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12423342/",
      },
    ],
    gallery: [],
    relatedPublicationId: "mex-2025-hydroponics",
  },
  {
    id: 4,
    image: notenest,
    title: "NoteNest",
    category: "web",
    url: "https://note-nest-wine.vercel.app/",
    featured: false,
    desc: "Minimalist note-taking app inspired by Google Keep, built with the MERN stack.",
    longDescription:
      "NoteNest is a compact note-taking client modeled after the simplicity of Google Keep: quick capture, light organization, and a fast UI.\n\nIt is built with the MERN stack (MongoDB, Express, React, Node) with REST-style APIs, auth-aware routes, and a responsive layout suited for daily use on desktop and mobile.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    links: [{ label: "Live site", href: "https://note-nest-wine.vercel.app/" }],
    gallery: [],
  },
  {
    id: 5,
    image: shoescape,
    title: "Shoescape",
    category: "web",
    url: "https://github.com/khatri-viren/shoescape",
    cardUrlLabel: "GitHub",
    featured: false,
    desc: "Shoe e-commerce site using PHP and MySQL—source on GitHub (live demo no longer hosted).",
    longDescription:
      "Shoescape is a classic e-commerce storefront for footwear: product listings, cart flows, and server-rendered pages backed by PHP and MySQL.\n\nThe project covers relational schema design, session-friendly patterns, and a typical LAMP-style deployment story. The previous public demo is no longer hosted; the full codebase remains available on GitHub for reference.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    links: [
      { label: "Source", href: "https://github.com/khatri-viren/shoescape" },
    ],
    gallery: [],
  },
  {
    id: 6,
    image: portfolio,
    title: "Portfolio",
    category: "web",
    url: "https://khatri-viren.github.io",
    featured: false,
    desc: "This portfolio site built with React—skills, projects, experience, and contact.",
    longDescription:
      "This portfolio is a React single-page app with client-side routing, theme switching, and section-based navigation for home, portfolio, hobbies, and legal pages.\n\nIt showcases skills, timeline-style experience, project work with rich detail dialogs, publications, and a contact channel—optimized for GitHub Pages hosting and incremental content updates in code.",
    tech: ["React", "Vite", "Tailwind CSS", "React Router"],
    links: [
      { label: "Live site", href: "https://khatri-viren.github.io" },
      {
        label: "Source",
        href: "https://github.com/khatri-viren/khatri-viren.github.io",
      },
    ],
    gallery: [],
  },
];

export const projectsNav = [
  { name: "all" },
  { name: "web" },
  { name: "app" },
  { name: "design" },
];

/** Recent work: featured entries first, then by array order. */
export function getProjectsForRecentWork(limit = 3) {
  const withIndex = projectsData.map((p, i) => ({ p, i }));
  withIndex.sort((a, b) => {
    const fa = a.p.featured ? 1 : 0;
    const fb = b.p.featured ? 1 : 0;
    if (fb !== fa) return fb - fa;
    return a.i - b.i;
  });
  return withIndex.slice(0, limit).map(({ p }) => p);
}
