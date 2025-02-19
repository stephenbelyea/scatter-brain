import { client } from "../sanity/client";

export const queryCreateListEntry = async (listEntry) => {
  const response = await client.create({
    _type: "listEntry",
    date: listEntry.date,
    taskListId: listEntry.taskListId,
    personId: listEntry.personId,
    completed: listEntry.completed,
    points: listEntry.points,
  });
  return response;
};
