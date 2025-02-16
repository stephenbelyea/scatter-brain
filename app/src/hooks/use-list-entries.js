import { useCallback, useEffect, useState } from "react";
import {
  queryCreateListEntry,
  queryFetchListEntries,
  queryUpdateListEntry,
} from "../queries";
import { getValidAuth } from "../utils";

export const useListEntries = () => {
  const [listEntries, setListEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchListEntries = useCallback(async () => {
    setLoading(true);
    const response = await queryFetchListEntries();
    setError(response.length === 0);
    setListEntries(response);
    setLoading(false);
  }, []);

  const updateListEntry = useCallback(
    async (listEntry) => {
      if (getValidAuth()) {
        setLoading(true);
        if (listEntry.id) {
          const { id, completed, points } = listEntry;
          await queryUpdateListEntry(id, { completed, points });
        } else {
          await queryCreateListEntry(listEntry);
        }
        await fetchListEntries();
        setLoading(false);
      }
    },
    [fetchListEntries]
  );

  useEffect(() => {
    if (!loading && !error && listEntries.length === 0) {
      fetchListEntries();
    }
  }, [loading, error, listEntries, fetchListEntries]);

  return {
    listEntries,
    fetchListEntries,
    updateListEntry,
    loading,
    error,
  };
};
