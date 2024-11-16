import { createContext } from "react";

export const AppContext = createContext({
  persons: [],
  taskItems: [],
  taskLists: [],
});
