import { createClient } from "@sanity/client";

const { VITE_REACT_SANITY_TOKEN, VITE_REACT_SANITY_PROJECT } = import.meta.env;

export const client = createClient({
  token: VITE_REACT_SANITY_TOKEN,
  projectId: VITE_REACT_SANITY_PROJECT,
  dataset: "production",
  apiVersion: "vX",
  useCdn: false,
});
