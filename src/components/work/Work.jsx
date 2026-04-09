import React from "react";
import Works from "./Works";
import Publications from "./Publications";

const Work = () => {
  return (
    <>
      <section className="work section" id="portfolio">
        <h1 className="section__title">Portfolio</h1>
        <span className="section__subtitle">All my work</span>
        <Works />
      </section>
      <Publications />
    </>
  );
};

export default Work;
