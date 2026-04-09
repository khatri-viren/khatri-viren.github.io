import React from "react";
import "./skills2.css";
import { skillCategories } from "./Data";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Stack &amp; tooling</span>
      <div className="skills__container container">
        {skillCategories.map((cat) => (
          <div className="skills__group" key={cat.title}>
            <h3 className="skills__group-title">{cat.title}</h3>
            <div className="skills__chips">
              {cat.items.map((item) => (
                <span key={item} className="skill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
