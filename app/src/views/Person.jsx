import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context";
import { Layout } from "../components";

export const Person = () => {
  const { slug } = useParams();
  const { persons } = useContext(AppContext);

  const person = useMemo(
    () => persons.find((per) => per.slug === slug),
    [persons, slug]
  );

  return (
    <Layout>
      <h1>{person.name}</h1>
    </Layout>
  );
};
