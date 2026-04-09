import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const WorksItems = ({ item, truncateDescription = false }) => {
  return (
    <Card className="flex min-h-0 min-w-0 max-w-full flex-col gap-0 overflow-hidden border border-[var(--surface-border)] bg-card/85 py-0 shadow-[var(--surface-shadow)] ring-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--surface-shadow-strong)]">
      <CardContent className="flex flex-1 flex-col gap-2.5 p-3 sm:p-3.5">
        <img
          src={item.image}
          alt={`${item.title} — project preview`}
          className="aspect-video w-full rounded-lg object-cover ring-1 ring-border/50"
        />
        <CardTitle
          className="px-0 pt-0.5 font-medium leading-snug"
          style={{ fontSize: "var(--small-font-size)" }}
        >
          {item.title}
        </CardTitle>
        <p
          className={cn(
            "flex-1 text-pretty leading-snug text-muted-foreground",
            truncateDescription && "line-clamp-4",
          )}
          style={{ fontSize: "var(--small-font-size)" }}
        >
          {item.desc}
        </p>
        <div className="pt-0.5">
          {item.url ? (
            <a
              href={item.url}
              className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo{" "}
              <i className="bx bx-right-arrow-alt text-base transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>
          ) : (
            <span className="inline-flex cursor-default items-center gap-1 text-sm text-muted-foreground opacity-85">
              No public demo
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default WorksItems;
