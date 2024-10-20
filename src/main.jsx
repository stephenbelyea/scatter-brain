import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersonView } from "./views/PersonView.jsx";
import { HomeView } from "./views/HomeView.jsx";
import { NotFoundView } from "./views/NotFoundView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/:personId",
        element: <PersonView />,
      },
      {
        path: "/*",
        exact: true,
        element: <NotFoundView />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
