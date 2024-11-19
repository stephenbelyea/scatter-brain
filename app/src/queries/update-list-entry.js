import { client } from "../sanity/client";

export const queryUpdateListEntry = async (listEntryId, listEntry) => {
  const response = await client.patch(listEntryId).set(listEntry).commit();
  return response;
};
