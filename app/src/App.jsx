import { useEffect, useState } from "react";
import { client } from "./sanity/client";
import "./App.css";

const PERSONS_QUERY = `*[_type == "person"]`;

function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchPersons = async () => {
      const personsResponse = await client.fetch(PERSONS_QUERY);
      setPersons(personsResponse);
    };
    if (persons.length === 0) {
      fetchPersons();
    }
  }, [persons]);

  return (
    <>
      <h1>Scatter Brain</h1>
      <div>
        <h2>People:</h2>
        <ul>
          {persons.map((person) => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
