import { useEffect, useState } from "react";
import { queryFetchListEntries } from "../queries";

export const useListEntries = () => {
  const [listEntries, setListEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchListEntries = async () => {
      setLoading(true);
      const response = await queryFetchListEntries();
      setListEntries(response);
      setLoading(false);
    };

    if (listEntries.length === 0) {
      fetchListEntries();
    }
  });

  return { listEntries, loading };
};
