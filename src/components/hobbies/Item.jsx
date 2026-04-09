import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { loadSketchUrl } from "./Data";

const Item = ({ file, name }) => {
  const [src, setSrc] = useState(null);
  const [error, setError] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        loadSketchUrl(file)
          .then((url) => setSrc(typeof url === "string" ? url : url.default))
          .catch(() => setError(true));
      },
      { rootMargin: "240px 0px", threshold: 0.01 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [file]);

  const alt = name?.trim() ? name : "Artwork sketch";

  return (
    <div ref={rootRef} className="min-w-0">
      <Card className="border-[var(--surface-border)] bg-card/85 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--surface-shadow-strong)]">
        <CardContent className="p-4">
        {error ? (
          <div
            className="flex min-h-[200px] w-[295px] max-w-full items-center justify-center rounded-2xl bg-muted/40 text-center text-xs text-muted-foreground ring-1 ring-border/50 max-[576px]:w-full"
            role="img"
            aria-label={`Could not load ${alt}`}
          >
            Image unavailable
          </div>
        ) : src ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="w-[295px] max-w-full rounded-2xl ring-1 ring-border/50 max-[576px]:w-full"
          />
        ) : (
          <div
            className="min-h-[220px] w-[295px] max-w-full animate-pulse rounded-2xl bg-muted/35 ring-1 ring-border/40 max-[576px]:w-full"
            aria-hidden
          />
        )}
        {name?.trim() ? (
          <h3
            className="mt-3 font-medium text-primary"
            style={{ fontSize: "var(--small-font-size)" }}
          >
            {name}
          </h3>
        ) : null}
        </CardContent>
      </Card>
    </div>
  );
};

export default Item;
