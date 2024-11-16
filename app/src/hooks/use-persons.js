import { useEffect, useState } from "react";
import { queryFetchPersons } from "../queries";

export const usePersons = () => {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPersons = async () => {
      setLoading(true);
      const response = await queryFetchPersons();
      setPersons(response);
      setLoading(false);
    };

    if (persons.length === 0) {
      fetchPersons();
    }
  });

  return { persons, loading };
};
