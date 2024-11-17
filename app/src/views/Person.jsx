import { Layout } from "../components";
import { usePersonLists } from "../hooks";

import "./person.css";

export const Person = () => {
  const { person, lists, todayCheckedItems, updateListEntry } =
    usePersonLists();

  const isItemInCheckedItems = (itemId, listId) =>
    todayCheckedItems.filter(
      (checked) => checked.itemId === itemId && checked.listId === listId
    ).length !== 0;

  const onChangeItem = async (itemId, listId) => {
    await updateListEntry({ itemId, listId });
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
