import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context";

export const usePersonLists = () => {
  const { slug } = useParams();
  const {
    persons,
    activeTaskLists,
    taskItems,
    listEntries,
    todayDate,
    allCheckedItems,
    updateListEntry,
  } = useContext(AppContext);
  const [showLists, setShowLists] = useState(true);

  const person = useMemo(
    () => persons.find((per) => per.slug === slug),
    [persons, slug]
  );

  const lists = useMemo(
    () =>
      activeTaskLists
        .filter((list) => list.people.includes(person?.id))
        .map((list) => ({
          ...list,
          items: list.taskItems.map((item) =>
            taskItems.find((task) => task.id === item)
          ),
        })),
    [person, activeTaskLists, taskItems]
  );

  const checkedItems = useMemo(
    () => allCheckedItems.filter((item) => item.personId === person?.id),
    [allCheckedItems, person]
  );

  const todayCheckedItems = useMemo(
    () => checkedItems.filter((item) => item.date === todayDate),
    [checkedItems, todayDate]
  );

  const todayAllItems = useMemo(() => {
    const items = [];
    lists.forEach((list) => {
      items.push(...list.items);
    });
    return items;
  }, [lists]);

  const updateListItem = useCallback(
    async (itemId, listId) => {
      const itemPoints =
        taskItems.find((item) => item.id === itemId)?.points || 1;
      const existingEntry = listEntries.find(
        (entry) =>
          entry.taskListId === listId &&
          entry.personId === person?.id &&
          entry.date === todayDate
      );

      if (!existingEntry) {
        return updateListEntry({
          completed: [itemId],
          taskListId: listId,
          personId: person?.id,
          date: todayDate,
          points: itemPoints,
        });
      }

      const isItemChecked = existingEntry.completed.includes(itemId);
      const completed = isItemChecked
        ? existingEntry.completed.filter((comp) => comp !== itemId)
        : [...existingEntry.completed, itemId];
      const points = isItemChecked
        ? existingEntry.points - itemPoints
        : existingEntry.points + itemPoints;

      return updateListEntry({
        id: existingEntry.id,
        completed,
        points,
      });
    },
    [listEntries, person, todayDate, taskItems, updateListEntry]
  );

  // Force refresh the item lists on slug change
  useEffect(() => {
    if (slug) {
      setShowLists(false);
    }
  }, [slug]);

  useEffect(() => {
    if (!showLists) {
      setShowLists(true);
    }
  }, [showLists]);

  return {
    checkedItems,
    todayCheckedItems,
    todayAllItems,
    updateListItem,
    showLists,
    person,
    lists,
  };
};
