import { client } from "../sanity/client";

export const queryUpdateListEntry = async (item) => {
  const response = await client.create({
    _type: "listEntry",
    date: item.date,
    taskListId: item.listId,
    personId: item.personId,
    completed: [item.itemId],
  });
  console.log(response);
};
