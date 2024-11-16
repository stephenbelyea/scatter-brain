import { useEffect, useState } from "react";
import { queryFetchPersons } from "../queries";

export const usePersons = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchPersons = async () => {
      const response = await queryFetchPersons();
      setPersons(response);
    };

    if (persons.length === 0) {
      fetchPersons();
    }
  });

  return { persons };
};
