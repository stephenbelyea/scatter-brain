import { Link } from "react-router-dom";
import { Layout } from "../components";

export const NotFound = () => {
  return (
    <Layout>
      <h1>Page Not Found!</h1>
      <p>
        Try going back to <Link to="/">the Dashboard</Link>.
      </p>
    </Layout>
  );
};
