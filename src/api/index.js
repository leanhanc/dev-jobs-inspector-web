const api = {};

api.search = (query, locationFilter, dateFilter, page = 1) => {
  return fetch(
    `${process.env.REACT_APP_BASE_URL}/search/?query=${query}&locationFilter=${
      locationFilter ? locationFilter : ''
    }&dateFilter=${dateFilter ? dateFilter : ''}&page=${page}`
  ).then(response => response.json());
};

export default api;
