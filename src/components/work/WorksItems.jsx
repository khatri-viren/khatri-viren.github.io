import React, { useCallback, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ProjectDetailDialog from "./ProjectDetailDialog";

const WorksItems = ({ item, truncateDescription = false }) => {
  const [open, setOpen] = useState(false);

  const openDialog = useCallback(() => setOpen(true), []);

  const onCardKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDialog();
      }
    },
    [openDialog],
  );

  return (
    <>
      <ProjectDetailDialog item={item} open={open} onOpenChange={setOpen} />
      <Card
        role="button"
        tabIndex={0}
        aria-label={`${item.title} — view project details`}
        onClick={openDialog}
        onKeyDown={onCardKeyDown}
        className="flex min-h-0 min-w-0 max-w-full cursor-pointer flex-col gap-0 overflow-hidden border border-[var(--surface-border)] bg-card/85 py-0 shadow-[var(--surface-shadow)] ring-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--surface-shadow-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
      >
        <CardContent className="flex flex-1 flex-col gap-2.5 p-3 sm:p-3.5">
          <img
            src={item.image}
            alt={`${item.title} — project preview`}
            className="pointer-events-none aspect-video w-full rounded-lg object-cover ring-1 ring-border/50"
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
                aria-label={
                  item.cardUrlLabel
                    ? `${item.title} — open ${item.cardUrlLabel} in a new tab`
                    : `${item.title} — open live site in a new tab`
                }
                onClick={(e) => e.stopPropagation()}
              >
                {item.cardUrlLabel ?? "Live site"}{" "}
                <i className="bx bx-right-arrow-alt text-base transition-transform duration-300 group-hover:translate-x-1"></i>
              </a>
            ) : (
              <span className="inline-flex cursor-default items-center gap-1 text-sm text-muted-foreground opacity-85">
                No public site
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default WorksItems;
