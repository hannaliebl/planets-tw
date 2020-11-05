import "./App.css";
import { useState, useEffect } from "react";
import getAllPlanets from "./api/planets";

function App() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayError, setDisplayError] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const result = await getAllPlanets();
        console.log(result);
        setPlanets(result);
      } catch (error) {
        setDisplayError(true);
      }
      setLoading(false);
    };
    fetchResults();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {loading && <h1>Loading!</h1>}
          {!loading && (
            <table>
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                {planets.map((planet) => {
                  return (
                    <tr key={planet.name}>
                      <td>{planet.name}</td>
                      <td>{planet.climate}</td>
                      <td>{planet.residents.length}</td>
                      <td>{planet.terrain}</td>
                      <td>{planet.population}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}

          {!loading && displayError && (
            <h1>Sorry, there was an error fetching planets</h1>
          )}
        </p>
      </header>
    </div>
  );
}

export default App;
