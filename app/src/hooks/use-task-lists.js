import { useCallback, useEffect, useState } from "react";
import { queryFetchTaskLists } from "../queries";

export const useTaskLists = () => {
  const [taskLists, setTaskLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchTaskLists = useCallback(async () => {
    setLoading(true);
    const response = await queryFetchTaskLists();
    setError(response.length === 0);
    setTaskLists(response);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading && !error && taskLists.length === 0) {
      fetchTaskLists();
    }
  }, [loading, error, taskLists, fetchTaskLists]);

  return { taskLists, fetchTaskLists, loading, error };
};
