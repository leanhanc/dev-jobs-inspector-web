const api = {};

api.search = (query, filter, page = 1) => {
  return fetch(
    `${process.env.REACT_APP_BASE_URL}/search/?query=${query}&filter=${
      filter ? filter : ''
    }&page=${page}&`
  ).then(response => response.json());
};

export default api;
