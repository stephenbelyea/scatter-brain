import { useCallback, useEffect, useState } from "react";
import { queryFetchTaskItems } from "../queries";

export const useTaskItems = () => {
  const [taskItems, setTaskItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchTaskItems = useCallback(async () => {
    setLoading(true);
    const response = await queryFetchTaskItems();
    setError(response.length === 0);
    setTaskItems(response);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading && !error && taskItems.length === 0) {
      fetchTaskItems();
    }
  }, [loading, error, taskItems, fetchTaskItems]);

  return { taskItems, fetchTaskItems, loading, error };
};
