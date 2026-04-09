import worqhatPlaceholder from "../../assets/work-ss/worqhat-placeholder.svg";
import shoescape from "../../assets/work-ss/shoescape.webp";
import portfolio from "../../assets/work-ss/portfolio.webp";
import floracare from "../../assets/work-ss/flora-care.png";
import notenest from "../../assets/work-ss/note-nest.png";

export const projectsData = [
  {
    id: 1,
    image: worqhatPlaceholder,
    title: "WorqHat — Platform & SmartMocks",
    category: "web",
    url: null,
    featured: true,
    desc: "Multi-tenant SaaS: database, workflow automation, drag-and-drop UI builder, and external portals. SmartMocks: AI interview platform with distributed async pipelines, queue-based orchestration, and LLM evaluation—built for high concurrency and reliability.",
  },
  {
    id: 2,
    image: floracare,
    title: "Flora Care",
    category: "web",
    url: "https://flora-care-sigma.vercel.app/",
    featured: true,
    desc: "AI-powered hydroponics: ESP32 sensors (TDS, pH, temperature, light), MQTT via EMQX, Express.js ingestion, Firebase real-time data, and a Next.js dashboard. Accompanying MethodsX article (June 2025).",
  },
  {
    id: 3,
    image: notenest,
    title: "NoteNest",
    category: "web",
    url: "https://note-nest-wine.vercel.app/",
    featured: false,
    desc: "Minimalist note-taking app inspired by Google Keep, built with the MERN stack.",
  },
  {
    id: 4,
    image: shoescape,
    title: "Shoescape",
    category: "web",
    url: "https://shoe-scape.000webhostapp.com/",
    featured: false,
    desc: "Shoe e-commerce site using PHP and MySQL.",
  },
  {
    id: 5,
    image: portfolio,
    title: "Portfolio",
    category: "web",
    url: "https://khatri-viren.github.io",
    featured: false,
    desc: "This portfolio site built with React—skills, projects, experience, and contact.",
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
