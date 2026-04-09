import React from "react";

const Social = () => {
  return (
    <div className="grid grid-flow-row auto-rows-min grid-cols-[max-content] gap-4 max-md:grid-flow-col max-md:auto-cols-max max-md:justify-center">
      <a
        href="https://www.instagram.com/v__rain/"
        className="inline-flex size-11 items-center justify-center rounded-full border border-border/70 bg-card/70 text-xl text-primary transition-all duration-300 hover:-translate-y-1 hover:border-border hover:text-foreground hover:shadow-[var(--surface-shadow)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/khatriviren"
        className="inline-flex size-11 items-center justify-center rounded-full border border-border/70 bg-card/70 text-xl text-primary transition-all duration-300 hover:-translate-y-1 hover:border-border hover:text-foreground hover:shadow-[var(--surface-shadow)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/khatri-viren"
        className="inline-flex size-11 items-center justify-center rounded-full border border-border/70 bg-card/70 text-xl text-primary transition-all duration-300 hover:-translate-y-1 hover:border-border hover:text-foreground hover:shadow-[var(--surface-shadow)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
