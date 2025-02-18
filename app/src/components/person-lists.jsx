import { useEffect, useState } from "react";
import { usePersonLists } from "../hooks";
import "./person-lists.css";

export const PersonLists = () => {
  const { lists, showLists, updateListItem, todayCheckedItems } =
    usePersonLists();
  const [openLists, setOpenLists] = useState([]);

  const isItemInCheckedItems = (itemId, listId) =>
    todayCheckedItems.filter(
      (checked) => checked.itemId === itemId && checked.listId === listId
    ).length !== 0;

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  const onToggleOpenList = (listId) => {
    if (openLists.includes(listId)) {
      setOpenLists(openLists.filter((id) => id !== listId));
    } else {
      setOpenLists([...openLists, listId]);
    }
  };

  useEffect(() => {
    if (lists && lists.length > 0) {
      const listsToOpen = lists.map((list) => list.id);
      setOpenLists(listsToOpen);
    }
  }, [lists]);

  return (
    <div className="person-lists">
      {showLists && lists.length > 0 && (
        <form onSubmit={onSubmitForm}>
          {lists.map((list) => {
            if (!list) return null;
            const listItems = list.items || [];
            const checkedItems = listItems.filter(
              (item) => item && isItemInCheckedItems(item.id, list.id)
            );
            const isListOpen = openLists.includes(list.id);
            const isItemsRemaining = checkedItems.length < listItems.length;
            const isItemsInList = listItems.length > 0;
            const progressMessage = isItemsInList ? (
              isItemsRemaining ? (
                `${checkedItems.length} of ${listItems.length}`
              ) : (
                <span style={{ color: "rgb(79, 212, 79)" }}>Done!</span>
              )
            ) : null;

            return (
              <fieldset className="list" key={list.id}>
                <legend>
                  <span className="list-name">{list.name}</span>
                  <small className="list-progress">{progressMessage}</small>
                  <button
                    className="list-toggle"
                    onClick={() => onToggleOpenList(list.id)}
                    aria-label={isListOpen ? "hide list" : "open list"}
                  >
                    {isListOpen ? "-" : "+"}
                  </button>
                </legend>
                {!isItemsRemaining && (
                  <p>
                    {isItemsInList
                      ? `You've completed this list for today. Great job!`
                      : `This list doesn't have any items yet.`}
                  </p>
                )}
                {isListOpen &&
                  list.items?.map((item) => {
                    if (!item) return null;
                    const isChecked = checkedItems.find(
                      (checked) => checked.id === item.id
                    );

                    return (
                      <div key={item.id} className="item">
                        <label htmlFor={item.id}>
                          <input
                            id={item.id}
                            type="checkbox"
                            name={list.id}
                            value={item.id}
                            onChange={() => updateListItem(item.id, list.id)}
                            defaultChecked={isChecked}
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
    </div>
  );
};
