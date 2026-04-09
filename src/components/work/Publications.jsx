import React from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { publicationsData } from "./PublicationsData";
import { projectsData } from "./Data";

function projectTitleById(id) {
  return projectsData.find((p) => p.id === id)?.title ?? null;
}

const Publications = () => {
  if (publicationsData.length === 0) return null;

  return (
    <section
      className="work section pb-12 pt-8"
      id="publications"
      aria-labelledby="publications-heading"
    >
      <h2
        id="publications-heading"
        className="section__title mb-1 text-center"
      >
        Publications
      </h2>
      <span className="section__subtitle mb-10 block text-center">
        Papers, protocols, and writing
      </span>

      <div className="container mx-auto flex w-full max-w-3xl flex-col gap-4">
        {publicationsData.map((pub) => (
          <Card
            key={pub.id}
            className="border border-[var(--surface-border)] bg-card/85 shadow-[var(--surface-shadow)] ring-0"
          >
            <CardContent className="space-y-2 p-4 sm:p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2 gap-y-1">
                <h3 className="text-base font-medium leading-snug text-foreground">
                  <a
                    href={pub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-1.5 text-pretty underline-offset-4 hover:text-primary hover:underline"
                  >
                    {pub.title}
                    <ExternalLink
                      className="mt-0.5 size-3.5 shrink-0 opacity-60 group-hover:opacity-100"
                      aria-hidden
                    />
                  </a>
                </h3>
                <span
                  className="text-xs font-medium uppercase tracking-wide text-muted-foreground"
                  style={{ fontSize: "var(--small-font-size)" }}
                >
                  {pub.venue} · {pub.dateLabel ?? pub.year}
                </span>
              </div>
              {pub.authors ? (
                <p
                  className="text-sm text-muted-foreground"
                  style={{ fontSize: "var(--small-font-size)" }}
                >
                  {pub.authors}
                </p>
              ) : null}
              {pub.abstract ? (
                <p
                  className="text-pretty leading-relaxed text-muted-foreground"
                  style={{ fontSize: "var(--small-font-size)" }}
                >
                  {pub.abstract}
                </p>
              ) : null}
              {pub.relatedProjectId != null ? (
                <p
                  className="pt-1 text-sm text-muted-foreground"
                  style={{ fontSize: "var(--small-font-size)" }}
                >
                  Related project:{" "}
                  <span className="text-foreground/90">
                    {projectTitleById(pub.relatedProjectId) ?? "Portfolio"}
                  </span>
                </p>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Publications;
