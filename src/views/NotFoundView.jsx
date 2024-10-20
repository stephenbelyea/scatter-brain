import { Link } from "react-router-dom";

export const NotFoundView = () => {
  return (
    <div className="not-found-view">
      <h1>Not Found</h1>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};
