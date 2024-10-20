import { NavLink, Outlet } from "react-router-dom";
import { PEOPLE } from "./data/lists";
import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <nav>
        <p>Scatter Brain</p>
        <NavLink to="/">Home</NavLink>
        {Object.entries(PEOPLE).map(([key, person]) => (
          <NavLink key={key} to={`/${person.key}`}>
            {person.label}
          </NavLink>
        ))}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
