import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context";
import { LoadingState } from "./loading-state";
import { Logo } from "./logo";

import "./layout.css";
import { ErrorState } from "./error-state";
import { getSearchParams } from "../utils";

export const Layout = ({ view = "", children }) => {
  const { persons, loading, error } = useContext(AppContext);
  const { appendParams } = getSearchParams();

  return (
    <div className={`app layout view-${view}`}>
      <nav>
        <Logo />
        <NavLink to={`/${appendParams}`}>Home</NavLink>
        {persons.map((person) => (
          <NavLink
            key={person.slug}
            to={`/person/${person.slug}${appendParams}`}
          >
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
