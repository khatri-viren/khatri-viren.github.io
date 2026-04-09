import React from "react";
import RecentWorks from "./RecentWorks";
import { Link } from "react-router-dom";

const RecentWork = () => {
  return (
    <section className="work section pt-10! max-md:pt-8!" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My recent works</span>
      <RecentWorks />
      <div className="mt-12 flex justify-center">
        <Link
          to="/portfolio"
          className="group inline-flex items-center gap-1 rounded-full border border-border/60 bg-card/75 px-4 py-2 text-sm text-muted-foreground shadow-(--surface-shadow) transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
        >
          See more
          <i className="bx bx-right-arrow-alt text-base transition-transform duration-300 group-hover:translate-x-1"></i>
        </Link>
      </div>
    </section>
  );
};

export default RecentWork;
