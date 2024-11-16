import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context";
import { Loading } from "./Loading";
import { Logo } from "./Logo";

import "./layout.css";

export const Layout = ({ view = "", children }) => {
  const { persons, loading } = useContext(AppContext);

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
      <Loading loading={loading} />
    </div>
  );
};
