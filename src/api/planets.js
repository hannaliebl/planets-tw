const PLANETS_API_URL = "https://swapi.dev/api/planets/";

export default async function getPlanets() {
  const response = await (await fetch(PLANETS_API_URL)).json();
  return response.results.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}
