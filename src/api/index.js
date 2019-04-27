export function search(args) {
  const url = args[0];
  const query = args[1];
  const location = args[2];
  const date = args[3];
  const currentPage = args[4];

  return fetch(
    `${url}/search/?q=${query}&location=${location}&currentPage=${currentPage}&dateFilter=${date}`
  ).then(response => response.json());
}
