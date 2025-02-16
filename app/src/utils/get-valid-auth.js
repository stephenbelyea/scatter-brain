export const getSearchParams = () => {
  const params = new URLSearchParams(document.location.search);
  const paramsString = params.toString();
  const appendParams = paramsString !== "" ? `?${paramsString}` : "";
  return { params, paramsString, appendParams };
};

export const getValidAuth = () => {
  const { params } = getSearchParams();

  if (
    params.get(import.meta.env.VITE_REACT_PARAM_AUTH_KEY) &&
    params.get(import.meta.env.VITE_REACT_PARAM_AUTH_KEY) ===
      import.meta.env.VITE_REACT_PARAM_AUTH_TOKEN
  ) {
    return true;
  }

  window.alert("Your updates will not be saved!");
  return false;
};
