import { createClient } from "@sanity/client";

export const client = createClient({
  token: import.meta.env.VITE_REACT_SANITY_API_TOKEN,
  projectId: import.meta.env.VITE_REACT_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_REACT_SANITY_PROJECT_DATASET,
  apiVersion: "v1",
  useCdn: false,
});
