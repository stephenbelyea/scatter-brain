import { useState } from "react";
import { Layout } from "../components";
import { usePersonLists } from "../hooks";

import "./person.css";

export const Person = () => {
  const { person, lists } = usePersonLists();
  const [checkedItems, setCheckedItems] = useState([]);

  const isItemInCheckedItems = (itemId, listId) =>
    !!checkedItems.find(
      (checked) => checked.itemId === itemId && checked.listId === listId
    );

  const onChangeItem = (itemId, listId) => {
    let updateCheckedItems = [];
    if (isItemInCheckedItems(itemId, listId)) {
      updateCheckedItems = checkedItems.filter(
        (item) => item.itemId !== itemId && item.listId !== listId
      );
    } else {
      updateCheckedItems = [...checkedItems, { itemId, listId }];
    }
    setCheckedItems(updateCheckedItems);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <Layout view="person">
      <h1>{person?.name}</h1>
      {lists.length > 0 && (
        <form onSubmit={onSubmitForm}>
          {lists.map((list) => {
            return (
              <fieldset className="list" key={list.id}>
                <legend>{list.name}</legend>
                {list.items?.map((item) => (
                  <div key={item.id} className="item">
                    <label htmlFor={item.id}>
                      <input
                        id={item.id}
                        type="checkbox"
                        name={list.id}
                        value={item.id}
                        onChange={() => onChangeItem(item.id, list.id)}
                        checked={isItemInCheckedItems(item.id, list.id)}
                      />
                      <span className="checkbox">
                        <span className="icon">&#10003;</span>
                        <span className="text">{item.title}</span>
                      </span>
                    </label>
                  </div>
                ))}
              </fieldset>
            );
          })}
        </form>
      )}
    </Layout>
  );
};
