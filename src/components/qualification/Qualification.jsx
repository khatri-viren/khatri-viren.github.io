import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">Education &amp; experience</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
            onKeyDown={(e) => e.key === "Enter" && toggleTab(1)}
            role="button"
            tabIndex={0}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
            onKeyDown={(e) => e.key === "Enter" && toggleTab(2)}
            role="button"
            tabIndex={0}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  B.Tech Computer Science &amp; Engineering
                </h3>
                <span className="qualification__subtitle">
                  MIT World Peace University, Pune
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 – May 2025 ·
                  CGPA 9.21
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Senior Secondary (XII)</h3>
                <span className="qualification__subtitle">
                  Nowrosjee Wadia College
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 – 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Higher Secondary (X)</h3>
                <span className="qualification__subtitle">
                  Sardar Dastur Hormazdiar High School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Co-Founder &amp; Chief Technology Officer (CTO)
                </h3>
                <span className="qualification__subtitle">
                  WorqHat (Winlysis Private Limited), Pune
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> January 2025 –
                  February 2026
                </div>
                <p className="qualification__summary">
                  Scaled a multi-tenant SaaS platform (database, workflow
                  automation, UI builder, external portals). Shipped a
                  production workflow engine (40+ nodes, event triggers, ~100K+
                  executions/day per tenant, 99.9% reliability). Led SmartMocks
                  architecture—async pipelines, queues, 1000+ concurrent users,
                  6K+ jobs/hour. Mentored 5+ engineers.
                </p>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Full Stack Development Intern
                </h3>
                <span className="qualification__subtitle">
                  WorqHat (Winlysis Private Limited), Pune
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> January 2024 –
                  December 2024
                </div>
                <p className="qualification__summary">
                  Built a drag-and-drop no-code backend system; platform for
                  RFQs, POs, deliveries, and financial data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
