import { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
import PlanetDataRow from "./components/PlanetDataRow";
import getPlanets from "./api/planets";

export default function App() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayError, setDisplayError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    const fetchResults = async (page) => {
      try {
        setLoading(true);
        setDisplayError(false);
        const [result, hasNextPage, hasPrevPage] = await getPlanets(page);
        setPlanets(result);
        setPage(page);
        setHasNextPage(hasNextPage);
        setHasPrevPage(hasPrevPage);
      } catch (error) {
        setDisplayError(true);
      }
      setLoading(false);
    };
    fetchResults(page);
  }, [page]);

  return (
    <div className="container">
      {loading && <h1 className="text-center">Loading...</h1>}
      {!loading && !displayError && (
        <>
          <Pagination
            setPage={setPage}
            page={page}
            hasPrevPage={hasPrevPage}
            hasNextPage={hasNextPage}
          />
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
              {planets.map((planet) => (
                <PlanetDataRow planet={planet} key={planet.name} />
              ))}
            </tbody>
          </table>
        </>
      )}
      {!loading && displayError && (
        <h1 className="text-center">
          Sorry, there was an error fetching planet data, please try again.
        </h1>
      )}
    </div>
  );
}
