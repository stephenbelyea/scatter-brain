import { createContext } from "react";

export const AppContext = createContext({
  persons: [],
  taskItems: [],
  taskLists: [],
  listEntries: [],
  updateListEntry: () => {},
  allCheckedItems: [],
  todayDate: new Date().toLocaleDateString("en-CA"),
  loading: false,
});
