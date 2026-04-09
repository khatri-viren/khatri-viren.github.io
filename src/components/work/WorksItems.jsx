import React from "react";

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p className="work__desc">{item.desc}</p>
      {item.url ? (
        <a
          href={item.url}
          className="work__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo{" "}
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      ) : (
        <span className="work__button work__button--static">
          No public demo
        </span>
      )}
    </div>
  );
};

export default WorksItems;