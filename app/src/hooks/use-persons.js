import { useCallback, useEffect, useState } from "react";
import { queryFetchPersons } from "../queries";

export const usePersons = () => {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPersons = useCallback(async () => {
    setLoading(true);
    const response = await queryFetchPersons();
    setPersons(response);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (persons.length === 0) {
      fetchPersons();
    }
  });

  return { persons, fetchPersons, loading };
};
