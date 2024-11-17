import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ubscmclg",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: import.meta.env.VITE_REACT_SANITY_TOKEN,
});
