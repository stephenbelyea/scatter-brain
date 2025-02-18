import { Layout, PersonStats, PersonLists } from "../components";

export const Person = () => {
  return (
    <Layout view="person">
      <PersonStats />
      <PersonLists />
    </Layout>
  );
};
