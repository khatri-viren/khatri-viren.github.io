import React from "react";
import { skillCategories } from "./Data";

const Skills = () => {
  return (
    <section
      className="section py-12! pb-4! max-md:py-8! max-md:pb-7!"
      id="skills"
    >
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle mb-5! max-md:mb-4!">
        Stack &amp; tooling
      </span>
      <div className="container mx-auto max-w-[900px]">
        {skillCategories.map((cat, index) => (
          <article
            key={cat.title}
            className={`grid gap-1 py-3 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-5 ${
              index !== skillCategories.length - 1
                ? "border-b border-border/60"
                : ""
            }`}
          >
            <h3
              className="font-semibold uppercase tracking-[0.16em] text-primary/90"
              style={{ fontSize: "var(--smaller-font-size)" }}
            >
              {cat.title}
            </h3>
            <p
              className="leading-6 text-muted-foreground"
              style={{ fontSize: "var(--small-font-size)" }}
            >
              {cat.items.join(", ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
