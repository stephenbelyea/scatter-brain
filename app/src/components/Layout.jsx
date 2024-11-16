/* eslint-disable react/prop-types */
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context";

export const Layout = ({ children }) => {
  const { persons } = useContext(AppContext);

  return (
    <div className="layout">
      <nav>
        <NavLink to="/">Dashboard</NavLink>
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
