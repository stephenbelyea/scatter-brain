import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { AppContext } from "./context";
import { appRouter } from "./router";
import {
  useListEntries,
  usePersons,
  useTaskItems,
  useTaskLists,
} from "./hooks";
import { TODAY, getIsListToday, getSortByTimeframes } from "./utils";

const todayDate = TODAY.toLocaleDateString("en-CA");

export const App = () => {
  const {
    persons,
    loading: personsLoading,
    error: personsError,
  } = usePersons();

  const { taskItems, loading: taskItemsLoading } = useTaskItems();

  const { taskLists, loading: taskListsLoading } = useTaskLists();

  const {
    listEntries,
    updateListEntry,
    loading: listEntriesLoading,
  } = useListEntries();

  const allCheckedItems = useMemo(() => {
    const checked = [];
    listEntries.forEach((entry) => {
      entry.completed.forEach((item) => {
        checked.push({
          listId: entry.taskListId,
          itemId: item,
          date: entry.date,
          personId: entry.personId,
        });
      });
    });
    return checked;
  }, [listEntries]);

  const activeTaskLists = useMemo(
    () =>
      taskLists
        .filter((list) => list.active)
        .filter(getIsListToday)
        .sort(getSortByTimeframes),
    [taskLists]
  );

  const loading = useMemo(
    () =>
      personsLoading ||
      taskItemsLoading ||
      taskListsLoading ||
      listEntriesLoading,
    [personsLoading, taskItemsLoading, taskListsLoading, listEntriesLoading]
  );

  const error = useMemo(() => personsError, [personsError]);

  return (
    <AppContext.Provider
      value={{
        persons,
        taskItems,
        taskLists,
        activeTaskLists,
        listEntries,
        updateListEntry,
        allCheckedItems,
        todayDate,
        loading,
        error,
      }}
    >
      <RouterProvider router={appRouter} />
    </AppContext.Provider>
  );
};
