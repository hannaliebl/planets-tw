const PLANETS_API_URL = "https://swapi.dev/api/planets/";

export default async function getPlanets(page) {
  const url = `${PLANETS_API_URL}?page=${page}`;
  let response = await (await fetch(url)).json();
  const hasNextPage = !!response.next;
  const hasPrevPage = !!response.previous;
  return [
    response.results.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }),
    hasNextPage,
    hasPrevPage,
  ];
}
