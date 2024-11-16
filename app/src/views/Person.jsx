import { Layout } from "../components";
import { usePersonLists } from "../hooks";

export const Person = () => {
  const { person, lists } = usePersonLists();

  return (
    <Layout>
      <h1>{person?.name}</h1>
      {lists.map((list) => {
        return (
          <div className="list" key={list?.id}>
            <p>{list?.name}</p>
            <ul>
              {list?.items?.map((item) => (
                <li key={item?.id}>
                  {item?.title} <br />
                  <small>{item?.description}</small>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </Layout>
  );
};
