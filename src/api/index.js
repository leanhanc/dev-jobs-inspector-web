const api = {};

api.search = (query, page = 1) => {
  return fetch(
    `${process.env.REACT_APP_BASE_URL}/search/?query=${query}&page=${page}`
  ).then(response => response.json());
};

export default api;
