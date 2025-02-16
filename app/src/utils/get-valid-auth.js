export const getValidAuth = () => {
  const { VITE_REACT_AUTH_KEY, VITE_REACT_AUTH_TOKEN } = import.meta.env;
  const params = new URLSearchParams(document.location.search);

  if (params.get(VITE_REACT_AUTH_KEY) !== VITE_REACT_AUTH_TOKEN) {
    console.log("You do not have edit permissions.");
  }

  return true;
};
