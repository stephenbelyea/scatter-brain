import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context";

import "./layout.css";

export const Layout = ({ children }) => {
  const { persons } = useContext(AppContext);

  return (
    <div className="app layout">
      <nav>
        <p>ScatterBrain</p>
        <NavLink to="/">Home</NavLink>
        {persons.map((person) => (
          <NavLink key={person.slug} to={`/person/${person.slug}`}>
            {person.name}
          </NavLink>
        ))}
      </nav>
      <main>{children}</main>
    </div>
  );
};
