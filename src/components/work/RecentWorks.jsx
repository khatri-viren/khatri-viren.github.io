import React from "react";
import { getProjectsForRecentWork } from "./Data";
import WorksItems from "./WorksItems";

const RecentWorks = () => {
  const items = getProjectsForRecentWork(3);
  return (
    <div>
      <div className="work__container container grid">
        {items.map((item) => (
          <WorksItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default RecentWorks;