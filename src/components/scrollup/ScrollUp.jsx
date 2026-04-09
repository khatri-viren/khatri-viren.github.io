import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= 560);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#home"
      className={cn(
        "fixed right-10 z-[10] rounded-full border border-border/60 bg-card/85 p-2 text-primary shadow-[var(--surface-shadow)] transition-all duration-300 hover:-translate-y-1 hover:text-foreground max-[992px]:right-6 max-[992px]:p-1.5 max-[350px]:right-4",
        visible
          ? "bottom-12 max-md:bottom-[calc(5.25rem+env(safe-area-inset-bottom,0px))]"
          : "bottom-[-20%]"
      )}
      aria-label="Scroll to top"
    >
      <i className="uil uil-arrow-up block text-2xl max-[992px]:text-xl"></i>
    </a>
  );
};

export default ScrollUp;
