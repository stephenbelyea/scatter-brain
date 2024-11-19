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

const todayDate = new Date().toLocaleDateString("en-CA");

export const App = () => {
  const { persons, loading: personsLoading } = usePersons();
  const {
    taskItems,

    loading: taskItemsLoading,
  } = useTaskItems();
  const {
    taskLists,

    loading: taskListsLoading,
  } = useTaskLists();
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

  const loading = useMemo(
    () =>
      personsLoading ||
      taskItemsLoading ||
      taskListsLoading ||
      listEntriesLoading,
    [personsLoading, taskItemsLoading, taskListsLoading, listEntriesLoading]
  );

  return (
    <AppContext.Provider
      value={{
        persons,
        taskItems,
        taskLists,
        listEntries,
        updateListEntry,
        allCheckedItems,
        todayDate,
        loading,
      }}
    >
      <RouterProvider router={appRouter} />
    </AppContext.Provider>
  );
};
