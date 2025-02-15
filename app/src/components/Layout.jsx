import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context";
import { LoadingState } from "./loading-state";
import { Logo } from "./logo";

import "./layout.css";
import { ErrorState } from "./error-state";

export const Layout = ({ view = "", children }) => {
  const { persons, loading, error } = useContext(AppContext);

  return (
    <div className={`app layout view-${view}`}>
      <nav>
        <Logo />
        <NavLink to="/">Home</NavLink>
        {persons.map((person) => (
          <NavLink key={person.slug} to={`/person/${person.slug}`}>
            {person.name}
          </NavLink>
        ))}
      </nav>
      <main>{children}</main>
      <footer>
        <p>
          Made by <a href="https://belwerks.com">Belwerks</a>
        </p>
      </footer>
      <LoadingState loading={loading} />
      <ErrorState error={error} />
    </div>
  );
};
