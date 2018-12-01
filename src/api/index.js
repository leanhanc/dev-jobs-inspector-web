const api = {};

api.test = () => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/test`).then(response =>
    response.json()
  );
};

api.search = query => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/search/?query=${query}`).then(
    response => response.json()
  );
};

export default api;
