import { RouterProvider } from "react-router-dom";
import { AppContext } from "./context";
import { appRouter } from "./router";
import { usePersons, useTaskItems, useTaskLists } from "./hooks";
import { useMemo } from "react";

export const App = () => {
  const { persons, loading: personsLoading } = usePersons();
  const { taskItems, loading: taskItemsLoading } = useTaskItems();
  const { taskLists, loading: taskListsLoading } = useTaskLists();

  const loading = useMemo(
    () => personsLoading || taskItemsLoading || taskListsLoading,
    [personsLoading, taskItemsLoading, taskListsLoading]
  );

  return (
    <AppContext.Provider value={{ persons, taskItems, taskLists, loading }}>
      <RouterProvider router={appRouter} />
    </AppContext.Provider>
  );
};
