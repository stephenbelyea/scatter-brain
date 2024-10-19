import { ListView } from "./views/ListView";

export const App = () => {
  return (
    <div className="app">
      <h1>Scatter Brain</h1>
      <div className="wrap">
        <ListView />
      </div>
    </div>
  );
};
