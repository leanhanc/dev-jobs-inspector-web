export function search(args) {
  const url = args[0];
  const query = args[1];

  return fetch(
    `${url}/search/?q=${query}&location=capital%20federal&currentPage=1&dateFilter=30`
  ).then(response => response.json());
}
