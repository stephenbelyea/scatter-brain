import { createBrowserRouter } from "react-router-dom";
import { Dashboard, NotFound, Person } from "./views";

const basename = import.meta.env.VITE_REACT_BASE_URL
  ? import.meta.env.VITE_REACT_BASE_URL
  : undefined;

export const appRouter = createBrowserRouter(
  [
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
  ],
  { basename }
);
