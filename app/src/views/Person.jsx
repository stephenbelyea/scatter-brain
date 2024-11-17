import { useContext } from "react";
import { Layout } from "../components";
import { usePersonLists } from "../hooks";
import { queryUpdateListEntry } from "../queries/update-list-entry";

import "./person.css";
import { AppContext } from "../context";

export const Person = () => {
  const { person, lists, todayCheckedItems } = usePersonLists();
  const { todayDate } = useContext(AppContext);

  const isItemInCheckedItems = (itemId, listId) =>
    todayCheckedItems.filter(
      (checked) => checked.itemId === itemId && checked.listId === listId
    ).length !== 0;

  const onChangeItem = async (itemId, listId) => {
    const result = await queryUpdateListEntry({
      itemId,
      listId,
      personId: person.id,
      date: todayDate,
      points: 2,
    });
    // let updateCheckedItems = [];
    // if (isItemInCheckedItems(itemId, listId)) {
    //   updateCheckedItems = checkedItems.filter(
    //     (item) => !(itemId === item.itemId && listId === item.listId)
    //   );
    // } else {
    //   updateCheckedItems = [...checkedItems, { itemId, listId }];
    // }
    // setCheckedItems(updateCheckedItems);
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
                          onChange={() => onChangeItem(item.id, list.id)}
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
