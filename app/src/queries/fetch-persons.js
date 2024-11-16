import { client } from "../sanity/client";

const QUERY_FETCH_PERSONS = `*[_type == "person"]`;

export const queryFetchPersons = async () => {
  const response = await client.fetch(QUERY_FETCH_PERSONS);
  return response.map((person) => ({
    id: person._id,
    name: person.name,
    slug: person.slug?.current,
  }));
};
