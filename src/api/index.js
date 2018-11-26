import { BASE_URL } from './config';

const api = {};

api.test = () => {
  return fetch(`${BASE_URL}/test`).then(response => response.json());
};

api.search = query => {
  return fetch(`${BASE_URL}/search/?query=${query}`).then(response =>
    response.json()
  );
};

export default api;
