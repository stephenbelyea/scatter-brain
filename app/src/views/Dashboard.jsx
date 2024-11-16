import { useContext } from "react";
import { Layout } from "../components";
import { AppContext } from "../context";

export const Dashboard = () => {
  const { loading } = useContext(AppContext);
  return (
    <Layout>
      <h1>ScatterBrain</h1>
      {loading && <p>Loading...</p>}
    </Layout>
  );
};
