import { useEffect, useState } from "react";
import { queryFetchTaskLists } from "../queries";

export const useTaskLists = () => {
  const [taskLists, setTaskLists] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTaskLists = async () => {
      setLoading(true);
      const response = await queryFetchTaskLists();
      setTaskLists(response);
      setLoading(false);
    };

    if (taskLists.length === 0) {
      fetchTaskLists();
    }
  });

  return { taskLists, loading };
};
