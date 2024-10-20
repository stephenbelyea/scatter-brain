import { NavLink, Outlet } from "react-router-dom";
import { PEOPLE } from "./data/lists";
import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <nav>
        <p>Scatter Brain</p>
        <NavLink to="/">Home</NavLink>
        {Object.entries(PEOPLE).map((person) => (
          <NavLink key={person[0]} to={`/${person[1].key}`}>
            {person[1].label}
          </NavLink>
        ))}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
