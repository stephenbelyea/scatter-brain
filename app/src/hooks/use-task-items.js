import { useEffect, useState } from "react";
import { queryFetchTaskItems } from "../queries";

export const useTaskItems = () => {
  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    const fetchTaskItems = async () => {
      const response = await queryFetchTaskItems();
      setTaskItems(response);
    };

    if (taskItems.length === 0) {
      fetchTaskItems();
    }
  });

  return { taskItems };
};
