import { useParams } from "react-router-dom";
import { PEOPLE } from "../data/lists";
import { NotFoundView } from "./NotFoundView";

export const PersonView = () => {
  const { personId } = useParams();

  const person = PEOPLE[personId.toUpperCase()];
  if (!person) {
    return <NotFoundView />;
  }

  return (
    <div className="person-view">
      <h1>{person.label}</h1>
    </div>
  );
};
