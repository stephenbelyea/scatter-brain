import { useCallback, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context";
import { useListEntries } from "./use-list-entries";

export const usePersonLists = () => {
  const { slug } = useParams();
  const { persons, taskLists, taskItems, allCheckedItems, todayDate } =
    useContext(AppContext);
  const { updateListEntry } = useListEntries();

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

  const checkedItems = useMemo(
    () => allCheckedItems.filter((item) => item.personId === person?.id),
    [allCheckedItems, person]
  );

  const todayCheckedItems = useMemo(
    () => checkedItems.filter((item) => item.date === todayDate),
    [checkedItems, todayDate]
  );

  const updateListEntryItem = useCallback(
    async (itemId, listId) => {
      await updateListEntry({
        itemId,
        listId,
        personId: person?.id,
        date: todayDate,
      });
    },
    [person, todayDate, updateListEntry]
  );

  return {
    checkedItems,
    todayCheckedItems,
    updateListEntryItem,
    person,
    lists,
  };
};
