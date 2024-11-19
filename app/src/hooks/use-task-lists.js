import { useCallback, useEffect, useState } from "react";
import { queryFetchTaskLists } from "../queries";

export const useTaskLists = () => {
  const [taskLists, setTaskLists] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTaskLists = useCallback(async () => {
    setLoading(true);
    const response = await queryFetchTaskLists();
    setTaskLists(response);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (taskLists.length === 0) {
      fetchTaskLists();
    }
  });

  return { taskLists, fetchTaskLists, loading };
};
