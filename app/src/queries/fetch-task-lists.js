import { client } from "../sanity/client";

const QUERY_FETCH_TASK_LISTS = `*[_type == "taskList"]`;

export const queryFetchTaskLists = async () => {
  try {
    const response = await client.fetch(QUERY_FETCH_TASK_LISTS);
    if (response && response.length > 0) {
      return response.map((list) => ({
        id: list._id,
        name: list.name,
        repeats: list.repeats,
        timeframe: list.timeframe,
        people: list.people.map((person) => person._ref),
        taskItems: list.taskItems.map((item) => item._ref),
      }));
    }
  } catch (error) {
    console.log("Fetch task lists: ", error);
  }
  return [];
};
