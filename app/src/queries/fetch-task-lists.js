import { client } from "../sanity/client";

const QUERY_FETCH_TASK_LISTS = `*[_type == "taskList"]`;

export const queryFetchTaskLists = async () => {
  const response = await client.fetch(QUERY_FETCH_TASK_LISTS);
  return response.map((list) => ({
    id: list._id,
    name: list.name,
    repeats: list.repeats,
    timeframe: list.timeframe,
    people: list.people.map((person) => person._ref),
    taskItems: list.taskItems.map((item) => item._ref),
  }));
};
