import { ALL_PEOPLE_LISTS } from "../data/all-people-lists";
import "./ListView.css";

export const ListView = () => {
  const { lists } = ALL_PEOPLE_LISTS.find((person) => person.key === "edgar");

  const onSubmitList = (e) => {
    e.preventDefault();
  };

  return (
    <div className="list-view">
      <h2>List View</h2>
      <form onSubmit={onSubmitList}>
        {lists.map((list) => (
          <fieldset key={list.id}>
            <legend>{list.label}</legend>
            {list.items.map((item) => (
              <div className="item" key={item.id}>
                <label htmlFor={item.id}>
                  <input
                    id={item.id}
                    name={list.id}
                    value={item.key}
                    type="checkbox"
                  />
                  <span className="label">{item.label}</span>
                </label>
              </div>
            ))}
          </fieldset>
        ))}
      </form>
    </div>
  );
};
