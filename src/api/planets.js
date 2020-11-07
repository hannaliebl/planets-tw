const PLANETS_API_URL = "https://swapi.dev/api/planets/";

// TOOD: Pagination? For now, get all results as it is only 60
async function getAllPlanets() {
  let planets = [];
  let response = await (await fetch(PLANETS_API_URL)).json();
  planets = planets.concat(response.results);
  while (response.next) {
    response = await (await fetch(response.next)).json();
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
