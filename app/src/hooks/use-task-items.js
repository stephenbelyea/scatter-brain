import { useEffect, useState } from "react";
import { queryFetchTaskItems } from "../queries";

export const useTaskItems = () => {
  const [taskItems, setTaskItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTaskItems = async () => {
      setLoading(true);
      const response = await queryFetchTaskItems();
      setTaskItems(response);
      setLoading(false);
    };

    if (taskItems.length === 0) {
      fetchTaskItems();
    }
  });

  return { taskItems, loading };
};
