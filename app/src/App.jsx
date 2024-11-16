import { RouterProvider } from "react-router-dom";
import { AppContext } from "./context";
import { appRouter } from "./router";
import { usePersons, useTaskItems, useTaskLists } from "./hooks";

export const App = () => {
  const { persons } = usePersons();
  const { taskItems } = useTaskItems();
  const { taskLists } = useTaskLists();

  return (
    <AppContext.Provider value={{ persons, taskItems, taskLists }}>
      <RouterProvider router={appRouter} />
    </AppContext.Provider>
  );
};
