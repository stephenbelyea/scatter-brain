import { Layout } from "../components";
import { usePersonLists, usePersonStats } from "../hooks";

import "./person.css";

export const Person = () => {
  const { person, lists, updateListItem, todayCheckedItems } = usePersonLists();
  const { totalPoints, todayPoints } = usePersonStats();

  const isItemInCheckedItems = (itemId, listId) =>
    todayCheckedItems.filter(
      (checked) => checked.itemId === itemId && checked.listId === listId
    ).length !== 0;

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <Layout view="person">
      <header>
        <h1>{person?.name}</h1>
        <div className="points">
          <div className="today">
            <span className="number">{todayPoints}</span>
            <span className="title">Today</span>
          </div>
          <div className="total">
            <span className="number">{totalPoints}</span>
            <span className="title">All Time</span>
          </div>
        </div>
      </header>
      {lists.length > 0 && (
        <form onSubmit={onSubmitForm}>
          {lists.map((list) => {
            if (!list) return null;
            return (
              <fieldset className="list" key={list.id}>
                <legend>{list.name}</legend>
                {list.items?.map((item) => {
                  if (!item) return null;
                  const isChecked = isItemInCheckedItems(item.id, list.id);
                  return (
                    <div key={item.id} className="item">
                      <label htmlFor={item.id}>
                        <input
                          id={item.id}
                          type="checkbox"
                          name={list.id}
                          value={item.id}
                          onChange={() => updateListItem(item.id, list.id)}
                          checked={isChecked}
                        />
                        <span className="checkbox">
                          <span className="icon">&#10003;</span>
                          <span className="text">{item.title}</span>
                        </span>
                      </label>
                    </div>
                  );
                })}
              </fieldset>
            );
          })}
        </form>
      )}
    </Layout>
  );
};
