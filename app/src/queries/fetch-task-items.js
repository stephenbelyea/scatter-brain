import { client } from "../sanity/client";

const QUERY_FETCH_TASK_ITEMS = `*[_type == "taskItem"]`;

export const queryFetchTaskItems = async () => {
  const response = await client.fetch(QUERY_FETCH_TASK_ITEMS);
  return response.map((item) => ({
    id: item._id,
    title: item.title,
    description: item.description,
    points: item.points,
  }));
};
