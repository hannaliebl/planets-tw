const PLANETS_API_URL = "https://swapi.dev/api/planets/";

// TOOD: Pagination? For now, get all results as it is only 60
async function getAllPlanets() {
  let planets = [];
  let response = await (await fetch(PLANETS_API_URL)).json();
  planets = planets.concat(response.results);
  let page = 1;
  while (response.next) {
    // Rather than using response.next directly, add page manually to base URL
    // as Safari CORS doesn't like http to https redirect
    page++;
    const newUrl = `${PLANETS_API_URL}?page=${page}`;
    response = await (await fetch(newUrl)).json();
    planets = planets.concat(response.results);
  }
  return planets.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}

export default getAllPlanets;
