import { useEffect, useState } from "react";
import { queryFetchTaskLists } from "../queries";

export const useTaskLists = () => {
  const [taskLists, setTaskLists] = useState([]);

  useEffect(() => {
    const fetchTaskLists = async () => {
      const response = await queryFetchTaskLists();
      setTaskLists(response);
    };

    if (taskLists.length === 0) {
      fetchTaskLists();
    }
  });

  return { taskLists };
};
