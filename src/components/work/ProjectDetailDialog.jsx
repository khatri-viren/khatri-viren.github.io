import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { getPublicationById } from "./PublicationsData";

function descriptionParagraphs(item) {
  const raw = item.longDescription ?? item.desc ?? "";
  return raw.split(/\n\n/).filter(Boolean);
}

function buildLinks(item) {
  const seen = new Set();
  const out = [];
  for (const link of item.links ?? []) {
    if (link?.href && !seen.has(link.href)) {
      seen.add(link.href);
      out.push(link);
    }
  }
  if (item.url && !seen.has(item.url)) {
    out.unshift({ label: "Live site", href: item.url });
  }
  return out;
}

const ProjectDetailDialog = ({ item, open, onOpenChange }) => {
  const paragraphs = useMemo(
    () => (item ? descriptionParagraphs(item) : []),
    [item],
  );
  const links = useMemo(() => (item ? buildLinks(item) : []), [item]);
  const tech = item?.tech ?? [];
  const gallery = item?.gallery ?? [];
  const showCarousel = gallery.length > 1;
  const publication =
    item?.relatedPublicationId != null
      ? getPublicationById(item.relatedPublicationId)
      : null;

  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-h-[min(90vh,720px)] max-w-[calc(100%-2rem)] overflow-y-auto sm:max-w-2xl lg:max-w-3xl"
        showCloseButton
      >
        <DialogHeader className="space-y-2 text-left">
          <DialogTitle className="pr-8 text-pretty text-lg leading-snug sm:text-xl">
            {item.title}
          </DialogTitle>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="font-normal capitalize">
              {item.category}
            </Badge>
            {tech.map((t) => (
              <Badge key={t} variant="outline" className="font-normal">
                {t}
              </Badge>
            ))}
          </div>
        </DialogHeader>

        <div className="space-y-4">
          {showCarousel ? (
            <div className="relative px-10 sm:px-12">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {[item.image, ...gallery].map((src, i) => (
                    <CarouselItem key={i}>
                      <img
                        src={src}
                        alt={`${item.title} — screenshot ${i + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="aspect-video w-full rounded-lg object-cover ring-1 ring-border/50"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-1 border-border/80 bg-background/90" />
                <CarouselNext className="right-1 border-border/80 bg-background/90" />
              </Carousel>
            </div>
          ) : (
            <img
              src={item.image}
              alt={`${item.title} — project preview`}
              loading="lazy"
              decoding="async"
              className="aspect-video w-full rounded-lg object-cover ring-1 ring-border/50"
            />
          )}

          <div className="space-y-3 text-sm text-muted-foreground">
            {paragraphs.map((block, i) => (
              <p key={i} className="text-pretty leading-relaxed">
                {block}
              </p>
            ))}
          </div>

          {publication ? (
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground/90">Publication: </span>
              <a
                href={publication.href}
                className="font-medium text-primary underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {publication.title}
              </a>
              <span className="text-muted-foreground">
                {" "}
                ({publication.venue},{" "}
                {publication.dateLabel ?? publication.year})
              </span>
              .{" "}
              <Link
                to="/portfolio#publications"
                className="text-primary underline-offset-4 hover:underline"
                onClick={() => onOpenChange?.(false)}
              >
                All publications
              </Link>
            </p>
          ) : null}

          {links.length > 0 ? (
            <div className="flex flex-wrap gap-2 pt-1">
              {links.map(({ label, href }) => (
                <Button key={href + label} variant="outline" size="sm" asChild>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {label}
                    <ExternalLink
                      className={cn("ml-1 size-3.5 opacity-70")}
                      aria-hidden
                    />
                  </a>
                </Button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              No public site or repository links for this project.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailDialog;
