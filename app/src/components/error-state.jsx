export const ErrorState = ({ error }) => (
  <div className="error state" aria-live="assertive" data-active={error}>
    {error && (
      <div className="inner">
        <p className="error">No data found!</p>
        <p>
          <small>Try refreshing the page.</small>
        </p>
      </div>
    )}
  </div>
);
