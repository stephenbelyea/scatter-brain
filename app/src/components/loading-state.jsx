export const LoadingState = ({ loading }) => (
  <div className="loading state" aria-live="polite" data-active={loading}>
    {loading && (
      <div className="inner">
        <p>Loading...</p>
      </div>
    )}
  </div>
);
