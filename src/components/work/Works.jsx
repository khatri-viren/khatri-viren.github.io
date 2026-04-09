import React from "react";
import { projectsData } from "./Data";
import WorksItems from "./WorksItems";

const Works = () => {
  return (
    <div>
      <div className="container mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {projectsData.map((item) => {
          return <WorksItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
