import { client } from "../sanity/client";

const QUERY_FETCH_LIST_ENTRIES = `*[_type == "listEntry"]`;

export const queryFetchListEntries = async () => {
  const response = await client.fetch(QUERY_FETCH_LIST_ENTRIES);
  return response.map((list) => ({
    id: list._id,
    personId: list.personId,
    taskListId: list.taskListId,
    date: list.date,
    points: list.points,
    completed: list?.completed || [],
  }));
};
