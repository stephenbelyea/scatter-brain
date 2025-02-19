import { createBrowserRouter } from "react-router-dom";
import { Dashboard, NotFound, Person } from "./views";

export const appRouter = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "person/:slug",
    element: <Person />,
  },
]);
