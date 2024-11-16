import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Person } from "./views";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "person/:slug",
    element: <Person />,
  },
]);
