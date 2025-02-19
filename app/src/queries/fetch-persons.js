import { client } from "../sanity/client";

const QUERY_FETCH_PERSONS = `*[_type == "person"]`;

export const queryFetchPersons = async () => {
  try {
    const response = await client.fetch(QUERY_FETCH_PERSONS);
    if (response && response.length > 0) {
      return response.map((person) => ({
        id: person._id,
        name: person.name,
        slug: person.slug?.current,
      }));
    }
  } catch (error) {
    console.log("Fetch persons: ", error);
  }
  return [];
};
