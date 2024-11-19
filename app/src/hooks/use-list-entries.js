import { useCallback, useEffect, useState } from "react";
import {
  queryCreateListEntry,
  queryFetchListEntries,
  queryUpdateListEntry,
} from "../queries";

export const useListEntries = () => {
  const [listEntries, setListEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchListEntries = useCallback(async () => {
    setLoading(true);
    const response = await queryFetchListEntries();
    setListEntries(response);
    setLoading(false);
  }, []);

  const updateListEntry = useCallback(
    async (listEntry) => {
      setLoading(true);
      if (listEntry.id) {
        const { id, completed, points } = listEntry;
        await queryUpdateListEntry(id, { completed, points });
      } else {
        await queryCreateListEntry(listEntry);
      }
      await fetchListEntries();
      setLoading(false);
    },
    [fetchListEntries]
  );

  useEffect(() => {
    if (listEntries.length === 0) {
      fetchListEntries();
    }
  });

  return { listEntries, fetchListEntries, updateListEntry, loading };
};
