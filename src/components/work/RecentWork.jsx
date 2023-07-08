import React from "react";
import "./work.css";
import RecentWorks from "./RecentWorks";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My recent works</span>
      <RecentWorks />
      <div className="recent__work-link">
        <Link to="/portfolio" className="work__button">
          See more<i className="bx bx-right-arrow-alt work__button-icon"></i>
        </Link>
      </div>
    </section>
  );
};

export default Work;
