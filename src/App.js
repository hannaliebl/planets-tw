import { useState, useEffect } from "react";
import TableRow from "./components/TableRow";
import getAllPlanets from "./api/planets";

function App() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayError, setDisplayError] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const result = await getAllPlanets();
        setPlanets(result);
      } catch (error) {
        setDisplayError(true);
      }
      setLoading(false);
    };
    fetchResults();
  }, []);

  return (
    <div className="container">
      {loading && <h1 className="text-center">Loading...</h1>}
      {!loading && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Climate</th>
              <th>Residents</th>
              <th>Terrain</th>
              <th>Population</th>
              <th>Surface Area Covered by Water</th>
            </tr>
          </thead>
          <tbody>
            {planets.map((planet) => {
              return <TableRow planet={planet} key={planet.name} />;
            })}
          </tbody>
        </table>
      )}
      {!loading && displayError && (
        <h1 className="text-center">
          Sorry, there was an error fetching planet data, please try again.
        </h1>
      )}
    </div>
  );
}

export default App;
