import React, { useEffect, useState } from "react";
import {
  Bookmark,
  BriefcaseBusiness,
  FileText,
  Home,
  Moon,
  Pencil,
  Send,
  Sun,
  UserRound,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const NAV = [
  { key: "home", label: "Home", to: "/", icon: Home, match: (p) => p === "/" },
  { key: "about", label: "About", href: "#about", icon: UserRound },
  { key: "skills", label: "Skills", href: "#skills", icon: FileText },
  {
    key: "qualification",
    label: "Experience",
    href: "#qualification",
    icon: Bookmark,
  },
  {
    key: "sketches",
    label: "Sketches",
    to: "/hobbies",
    icon: Pencil,
    match: (p) => p === "/hobbies",
  },
  {
    key: "portfolio",
    label: "Portfolio",
    to: "/portfolio",
    icon: BriefcaseBusiness,
    match: (p) => p === "/portfolio",
  },
  { key: "contact", label: "Contact", href: "#contact", icon: Send },
];

const iconButtonClass =
  "flex size-full items-center justify-center rounded-full text-primary/75 transition-colors duration-200 hover:bg-accent/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { resolvedTheme, setTheme } = useTheme();
  const isMobile = useIsMobile();
  const activeHash = location.hash || "#home";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (item) => {
    if (item.match) return item.match(location.pathname);
    if (item.to) return location.pathname === item.to;
    if (item.href?.startsWith("#")) {
      return location.pathname === "/" && activeHash === item.href;
    }
    return false;
  };

  const isDark = resolvedTheme === "dark";
  const tooltipSide = isMobile ? "top" : "bottom";

  return (
    <header
      className={cn(
        "pointer-events-none fixed inset-x-0 z-100 flex justify-center",
        "bottom-0 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]",
        "md:top-0 md:bottom-auto md:pt-4 md:pb-0"
      )}
      aria-label="Site navigation"
    >
      <div className="pointer-events-auto max-w-[min(100vw-1.5rem,calc(100vw-2rem))] overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Dock
          direction={isMobile ? "bottom" : "middle"}
          iconSize={isMobile ? 34 : 36}
          iconMagnification={isMobile ? 34 : 48}
          iconDistance={isMobile ? 72 : 100}
          disableMagnification={isMobile}
          className={cn(
            "mt-0 h-11 min-h-11 gap-0.5 rounded-full border border-border/50 bg-card/50 px-1.5 py-1 dark:bg-card/30",
            "supports-backdrop-blur:bg-background/70 supports-backdrop-blur:dark:bg-background/45",
            "shadow-(--surface-shadow)",
            scrolled && "shadow-(--surface-shadow-strong)"
          )}
        >
          {NAV.map((item) => {
            const active = isActive(item);
            const Icon = item.icon;
            const linkClass = cn(iconButtonClass, active && "bg-accent text-foreground shadow-sm");

            const inner = (
              <Tooltip>
                <TooltipTrigger asChild>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className={linkClass}
                      aria-label={item.label}
                      aria-current={active ? "page" : undefined}
                    >
                      <Icon className="size-[15px] shrink-0 md:size-4" strokeWidth={1.75} />
                    </Link>
                  ) : (
                    <Link
                      to={{ pathname: "/", hash: item.href }}
                      className={linkClass}
                      aria-label={item.label}
                      aria-current={active ? "page" : undefined}
                    >
                      <Icon className="size-[15px] shrink-0 md:size-4" strokeWidth={1.75} />
                    </Link>
                  )}
                </TooltipTrigger>
                <TooltipContent side={tooltipSide} className="text-xs font-medium">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            );

            return (
              <DockIcon
                key={item.key}
                className={cn("text-foreground/90", !active && "hover:bg-transparent")}
              >
                {inner}
              </DockIcon>
            );
          })}

          <Separator
            orientation="vertical"
            className="mx-0.5 h-7 shrink-0 bg-border/70"
            decorative
          />

          <DockIcon className="text-foreground/90 hover:bg-transparent">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className={cn(iconButtonClass, "hover:bg-accent/80")}
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                >
                  {isDark ? (
                    <Sun className="size-[15px] shrink-0 md:size-4" strokeWidth={1.75} />
                  ) : (
                    <Moon className="size-[15px] shrink-0 md:size-4" strokeWidth={1.75} />
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent side={tooltipSide} className="text-xs font-medium">
                {isDark ? "Light mode" : "Dark mode"}
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </div>
    </header>
  );
};

export default Header;
