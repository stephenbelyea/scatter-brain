import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NotFoundView } from "./NotFoundView";
import { ALL_PEOPLE_LISTS } from "../data/all-people-lists";

const getPerson = (personId) =>
  ALL_PEOPLE_LISTS.find((person) => person.id === personId) || undefined;

const getTotalItems = (person) => {
  let count = 0;
  if (person && person?.lists.length > 0) {
    person?.lists.forEach((list) => (count += list.items.length));
  }
  return count;
};

export const PersonView = () => {
  const { personId } = useParams();
  const [checkedItems, setCheckedItems] = useState([]);

  const person = getPerson(personId);
  const totalItems = getTotalItems(person);

  const onChangeItem = (e) => {
    const itemId = e.target.id;
    if (checkedItems.includes(itemId)) {
      const updateItems = checkedItems.filter((item) => item !== itemId);
      setCheckedItems(updateItems);
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };

  const onSubmitLists = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (checkedItems.length > 0 && checkedItems.length === totalItems) {
      window.alert(
        `Great job ${person?.label}! You finished everything today 😀`
      );
    }
  }, [checkedItems, totalItems, person]);

  if (!person) {
    return <NotFoundView />;
  }

  return (
    <div className="person-view">
      <h1>{person?.label}</h1>
      {person?.lists.length === 0 ? (
        <p>No task lists found for {person?.label}.</p>
      ) : (
        <form onSubmit={onSubmitLists}>
          {person?.lists.map((list) => (
            <fieldset key={list.key} className="list">
              <legend>{list.label}</legend>
              {list.items.map((item) => (
                <div key={item.key} className="item">
                  <label htmlFor={item.id}>
                    <input
                      id={item.id}
                      type="checkbox"
                      name={list.key}
                      value={item.key}
                      onChange={onChangeItem}
                      checked={checkedItems.includes(item.id)}
                    />
                    <span className="checkbox">
                      <span className="icon">&#10003;</span>
                      <span className="text">{item.label}</span>
                    </span>
                  </label>
                </div>
              ))}
            </fieldset>
          ))}
        </form>
      )}
    </div>
  );
};
