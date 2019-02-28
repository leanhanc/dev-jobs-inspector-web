const api = {};

api.search = (query, locationFilter, dateFilter, page = 1) => {
  return new Promise((resolve, reject) => {
    fetch(
      `${
        process.env.REACT_APP_BASE_URL
      }/search/?query=${query}&locationFilter=${
        locationFilter ? locationFilter : ''
      }&dateFilter=${dateFilter ? dateFilter : ''}&page=${page}`
    )
      .then(response => resolve(response.json()))
      .catch(e => {
        /* 
      Se agrega soporte para un servidor como fallback. Se
      lo llama si falla la conexión al servidor principal y si figura
      como variable de entorno.
      */
        if (process.env.REACT_APP_BASE_URL_FALLBACK) {
          return fetch(
            `${
              process.env.REACT_APP_BASE_URL_FALLBACK
            }/search/?query=${query}&locationFilter=${
              locationFilter ? locationFilter : ''
            }&dateFilter=${dateFilter ? dateFilter : ''}&page=${page}`
          )
            .then(response => resolve(response.json()))
            .catch(e => reject(e));
        } else {
          reject(e);
        }
      });
  });
};

export default api;
