import React from 'react';
import { projectsData } from "./Data";
import WorksItems from "./WorksItems";

const RecentWorks = () => {
  return (
    <div>
        <div className="work__container container grid">
        {projectsData.slice(0, 3).map((item) => {
          return <WorksItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  )
}

export default RecentWorks