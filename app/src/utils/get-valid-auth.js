export const getSearchParams = () => {
  const params = new URLSearchParams(document.location.search);
  const paramsString = params.toString();
  const appendParams = paramsString !== "" ? `?${paramsString}` : "";
  return { params, paramsString, appendParams };
};

export const getValidAuth = () => {
  const { VITE_REACT_AUTH_KEY, VITE_REACT_AUTH_TOKEN } = import.meta.env;
  const { params } = getSearchParams();

  if (params.get(VITE_REACT_AUTH_KEY) !== VITE_REACT_AUTH_TOKEN) {
    window.alert("Your updates will not be saved!");
    return false;
  }

  return true;
};
