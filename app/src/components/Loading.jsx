import "./loading.css";

export const Loading = ({ loading }) => (
  <div className="loading" aria-live="polite" data-active={loading}>
    {loading && (
      <div className="inner">
        <p>Loading...</p>
      </div>
    )}
  </div>
);
