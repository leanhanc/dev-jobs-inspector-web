const api = {};

api.search = (query, locationFilter, dateFilter, page = 1) => {
  return fetch(
    `${process.env.REACT_APP_BASE_URL}/search/?query=${query}&locationFilter=${
      locationFilter ? locationFilter : ''
    }&dateFilter=${dateFilter ? dateFilter : ''}&page=${page}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      if (process.env.REACT_APP_BASE_URL_FALLBACK) {
        return fetch(
          `${
            process.env.REACT_APP_BASE_URL_FALLBACK
          }/search/?query=${query}&locationFilter=${
            locationFilter ? locationFilter : ''
          }&dateFilter=${dateFilter ? dateFilter : ''}&page=${page}`
        ).then(response => response.json());
      }
    }
  });
};

export default api;
