import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  // Change Background Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  // Toggle Menu
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Viren
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to="/"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="bx bx-home nav__icon"></i> Home
              </Link>
            </li>
            <li className="nav__item">
              <a href="#about" onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }>
                <i className="bx bx-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav__link active-link" : "nav__link"
                }>
                <i className="bx bx-file nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <Link to="/hobbies" onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services" ? "nav__link active-link" : "nav__link"
                }>
                <i className="bx bx-briefcase-alt nav__icon"></i> Hobbies
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/portfolio" onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"
                }>
                <i className="bx bx-landscape nav__icon"></i> Portfolio
              </Link>
            </li>
            <li className="nav__item">
              <a href="#contact" onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav__link active-link" : "nav__link"
                }>
                <i className="bx bx-send nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            className="bx bx-x nav__close"
            onClick={() => {
              showMenu(!Toggle);
            }}
          ></i>
        </div>
        <div
          className="nav__toggle"
          onClick={() => {
            showMenu(!Toggle);
          }}
        >
          <i className="bx bx-category"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
