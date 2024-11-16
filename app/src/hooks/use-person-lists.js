import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context";

export const usePersonLists = () => {
  const { slug } = useParams();
  const { persons, taskLists, taskItems } = useContext(AppContext);

  const person = useMemo(
    () => persons.find((per) => per.slug === slug),
    [persons, slug]
  );

  const lists = useMemo(
    () =>
      taskLists
        .filter((list) => list.people.includes(person?.id))
        .map((list) => ({
          ...list,
          items: list.taskItems.map((item) =>
            taskItems.find((task) => task.id === item)
          ),
        })),
    [person, taskLists, taskItems]
  );

  return {
    person,
    lists,
  };
};
