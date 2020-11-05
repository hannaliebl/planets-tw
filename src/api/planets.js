const PLANETS_API_URL = "https://swapi.dev/api/planets/";

// TOOD: Pagination? For now, get all results as it is only 60
async function getAllPlanets() {
  let planets = [];
  let results = await (await fetch(PLANETS_API_URL)).json();
  planets = planets.concat(results.results);
  while (results.next) {
    results = await (await fetch(results.next)).json();
    planets = planets.concat(results.results);
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
