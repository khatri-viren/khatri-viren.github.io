import React from "react";
import { getProjectsForRecentWork } from "./Data";
import WorksItems from "./WorksItems";

const RecentWorks = () => {
  const items = getProjectsForRecentWork(3);
  return (
    <div>
      <div className="container mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {items.map((item) => (
          <WorksItems item={item} key={item.id} truncateDescription />
        ))}
      </div>
    </div>
  );
};

export default RecentWorks;
