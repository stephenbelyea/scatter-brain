import { useCallback, useEffect, useState } from "react";
import { queryFetchListEntries } from "../queries";

export const useListEntries = () => {
  const [listEntries, setListEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchListEntries = useCallback(async () => {
    setLoading(true);
    const response = await queryFetchListEntries();
    setListEntries(response);
    setLoading(false);
  }, []);

  const updateListEntry = useCallback(async (entryItem) => {
    setLoading(true);
    const { itemId, listId, personId, date } = entryItem;
    console.log({ itemId, listId, personId, date });
    // check if list + person + date entry exists
    // if yes, update
    // if no, create
    // refresh list entries
    setLoading(false);
  }, []);

  useEffect(() => {
    if (listEntries.length === 0) {
      fetchListEntries();
    }
  });

  return { listEntries, updateListEntry, loading };
};
