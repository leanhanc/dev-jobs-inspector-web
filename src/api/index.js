export function search(args) {
  const url = args[0];
  const query = args[1];
  const location = args[2];
  const date = args[3];

  return fetch(
    `${url}/search/?q=${query}&location=capital%20federal&currentPage=1&dateFilter=${date}`
  ).then(response => response.json());
}
