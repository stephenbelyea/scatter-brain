import { useCallback, useEffect, useState } from "react";
import { queryFetchTaskItems } from "../queries";

export const useTaskItems = () => {
  const [taskItems, setTaskItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTaskItems = useCallback(async () => {
    setLoading(true);
    const response = await queryFetchTaskItems();
    setTaskItems(response);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (taskItems.length === 0) {
      fetchTaskItems();
    }
  });

  return { taskItems, fetchTaskItems, loading };
};
