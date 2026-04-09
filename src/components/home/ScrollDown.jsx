import React from "react";

const ScrollDown = () => {
  return (
    <div>
      <a
        href="#about"
        className="button--flex group items-center gap-1.5 rounded-full"
      >
        <svg
          width="24px"
          height="24px"
          className="text-primary transition-transform duration-300 group-hover:translate-y-0.5"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            className="animate-scroll-wheel"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "20px",
            }}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "20px",
            }}
          ></path>
        </svg>
        <span className="ml-0.5 text-sm font-medium text-primary transition-colors duration-300 group-hover:text-foreground">
          Scroll Down
        </span>
        <i className="uil uil-arrow-down text-base text-primary transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-foreground"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
