import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const SOCIAL = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/v__rain/",
    iconClass: "uil uil-instagram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/khatriviren",
    iconClass: "uil uil-linkedin-alt",
  },
  {
    label: "GitHub",
    href: "https://github.com/khatri-viren",
    iconClass: "uil uil-github-alt",
  },
];

const EXPLORE = [
  { label: "Home", to: "/" },
  { label: "About", to: { pathname: "/", hash: "#about" } },
  { label: "Skills", to: { pathname: "/", hash: "#skills" } },
  { label: "Work", to: { pathname: "/", hash: "#portfolio" } },
  { label: "Experience", to: { pathname: "/", hash: "#qualification" } },
  { label: "Contact", to: { pathname: "/", hash: "#contact" } },
];

const MORE = [
  { label: "Portfolio", to: "/portfolio" },
  { label: "Hobbies", to: "/hobbies" },
  { label: "Privacy", to: "/privacy" },
];

const linkClass =
  "inline-flex items-center gap-0.5 text-sm text-primary/85 transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm";

const sectionLabelClass =
  "mb-4 block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground/90";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-4 border-t border-border/50 bg-card/35 backdrop-blur-md supports-backdrop-filter:bg-card/25 dark:supports-backdrop-filter:bg-card/20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border/80 to-transparent"
        aria-hidden
      />
      <div className="container py-12 pb-10 max-md:py-10 max-md:pb-8">
        <div className="grid gap-12 max-lg:gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link
              to="/"
              className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-foreground/90 transition-colors hover:text-foreground"
            >
              Viren
            </Link>
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              Full-stack engineer and technology leader in Pune — scalable products, JS/TS stack, and
              product-minded builds.
            </p>
          </div>

          <nav className="md:max-lg:col-span-1 lg:col-span-3" aria-label="Footer navigation">
            <span className={sectionLabelClass}>Explore</span>
            <ul className="grid gap-2 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2">
              {EXPLORE.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:max-lg:col-span-2 lg:col-span-4">
            <span className={sectionLabelClass}>More</span>
            <ul className="mb-6 grid gap-2">
              {MORE.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                    <ArrowUpRight className="size-3.5 opacity-60" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
            <span className={cn(sectionLabelClass, "mb-3")}>Connect</span>
            <div className="flex flex-wrap gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border/60 bg-background/60 text-lg text-primary/80 shadow-(--surface-shadow) transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:text-foreground hover:shadow-(--surface-shadow-strong) dark:bg-background/40"
                  aria-label={s.label}
                >
                  <i className={s.iconClass} aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-border/60 max-md:my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-relaxed text-muted-foreground">
            © {year} Viren Khatri. All rights reserved.
          </p>
          <Link
            to={{ pathname: "/", hash: "#home" }}
            className="text-xs font-medium text-muted-foreground/90 underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
