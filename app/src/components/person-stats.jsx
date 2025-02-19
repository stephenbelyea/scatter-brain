import { usePersonLists, usePersonStats } from "../hooks";

import "./person-stats.css";

export const PersonStats = () => {
  const { person, todayAllItems, todayCheckedItems } = usePersonLists();
  const { totalPoints, todayPoints } = usePersonStats();

  const todayItemsStat = (
    <>
      {todayCheckedItems.length} <sup>of</sup> {todayAllItems.length}
    </>
  );

  return (
    <header className="person-stats">
      <div className="name">
        <h1>{person?.name}</h1>
      </div>
      <div className="points">
        <div className="to-dos">
          <span className="number">{todayItemsStat}</span>
          <span className="title">To-Dos</span>
        </div>
        <div className="today">
          <span className="number">
            {todayPoints}
            <sup>pts</sup>
          </span>
          <span className="title">Today</span>
        </div>
        <div className="total">
          <span className="number">
            {totalPoints}
            <sup>pts</sup>
          </span>
          <span className="title">All Time</span>
        </div>
      </div>
    </header>
  );
};
