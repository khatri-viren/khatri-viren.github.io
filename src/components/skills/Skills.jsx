import React from 'react';
// import "./skills.css";
import "./skills2.css";
import { data } from './Data';


const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">My Skills</h2>
        <span className="section__subtitle"></span>
        <div className="skills__container container">
          {data.map((item,index) => {
            return (
              <span key={index} className="skill">{item}</span>
            )
          })}
            
        </div>
    </section>
  )
}

export default Skills