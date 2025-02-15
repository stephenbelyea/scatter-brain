import { usePersonLists } from "../hooks";
import "./person-lists.css";

export const PersonLists = () => {
  const { lists, showLists, updateListItem, todayCheckedItems } =
    usePersonLists();

  const isItemInCheckedItems = (itemId, listId) =>
    todayCheckedItems.filter(
      (checked) => checked.itemId === itemId && checked.listId === listId
    ).length !== 0;

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="person-lists">
      {showLists && lists.length > 0 && (
        <form onSubmit={onSubmitForm}>
          {lists.map((list) => {
            if (!list) return null;
            const checkedItems = list.items.filter((item) =>
              isItemInCheckedItems(item.id, list.id)
            );
            const isItemsRemaining = checkedItems.length < list.items.length;
            const progressMessage = isItemsRemaining ? (
              `${checkedItems.length} of ${list.items.length}`
            ) : (
              <span style={{ color: "rgb(79, 212, 79)" }}>Done!</span>
            );

            return (
              <fieldset className="list" key={list.id}>
                <legend>
                  <span>
                    <span>{list.name}</span>
                  </span>
                  <small>{progressMessage}</small>
                </legend>
                {!isItemsRemaining && (
                  <p>You&apos;ve completed this list for today. Great job!</p>
                )}
                {isItemsRemaining &&
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
