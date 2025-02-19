import { useCallback, useEffect, useState } from "react";
import { queryFetchPersons } from "../queries";

export const usePersons = () => {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPersons = useCallback(async () => {
    setLoading(true);
    const response = await queryFetchPersons();
    setError(response.length === 0);
    setPersons(response);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading && !error && persons.length === 0) {
      fetchPersons();
    }
  }, [loading, error, persons, fetchPersons]);

  return { persons, fetchPersons, loading, error };
};
