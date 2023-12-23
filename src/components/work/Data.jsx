import shoescape from "../../assets/work-ss/shoescape.webp";
import portfolio from "../../assets/work-ss/portfolio.webp";
import floracare from "../../assets/work-ss/flora-care.png";
import notenest from "../../assets/work-ss/note-nest.png";

export const projectsData = [
  {
    id: 1,
    image: floracare,
    title: "Flora Care",
    category: "web",
    url: "https://flora-care-sigma.vercel.app/",
    desc: "A multifunctional platform where users can purchase IoT plant care devices, explore expert blogs on plant care, and visualize data from their IoT devices.",
  },
  {
    id: 2,
    image: shoescape,
    title: "Shoescape",
    category: "web",
    url: "https://shoe-scape.000webhostapp.com/",
    desc: "A shoe e-commerce website using php and mysql.",
  },
  {
    id: 3,
    image: notenest,
    title: "NoteNest",
    category: "web",
    url: "https://note-nest-wine.vercel.app/",
    desc: "A minimalist note-taking app inspired by google keep build using MERN stack",
  },
  {
    id: 4,
    image: portfolio,
    title: "Portfolio",
    category: "web",
    url: "https://khatri-viren.github.io",
    desc: "Developed a professional portfolio website using React.js, showcasing personal information, skills, projects, hobbies and achievements.",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "app",
  },
  {
    name: "design",
  },
];
