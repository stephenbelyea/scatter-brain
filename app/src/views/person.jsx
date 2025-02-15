import { Layout } from "../components";
import { PersonLists } from "../components/person-lists";
import { usePersonLists, usePersonStats } from "../hooks";

import "./person.css";

export const Person = () => {
  const { person, todayAllItems, todayCheckedItems } = usePersonLists();
  const { totalPoints, todayPoints } = usePersonStats();

  const todayItemsStat = (
    <>
      {todayCheckedItems.length} <sup>of</sup> {todayAllItems.length}
    </>
  );

  return (
    <Layout view="person">
      <header>
        <h1>{person?.name}</h1>
        <div className="points">
          <div className="today">
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
      <PersonLists />
    </Layout>
  );
};
