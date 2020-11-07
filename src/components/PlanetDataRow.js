import { calculateWaterArea } from "../util/surfaceArea";
import { convertUnknowns, groupDigitsByThree } from "../util/stringHelpers";

export default function PlanetDataRow({ planet }) {
  return (
    <tr>
      <td>
        <a href={planet.url} target="_blank" rel="noreferrer">
          {convertUnknowns(planet.name)}
        </a>
      </td>
      <td>{convertUnknowns(planet.climate)}</td>
      <td>{planet.residents.length}</td>
      <td>{convertUnknowns(planet.terrain)}</td>
      <td>{groupDigitsByThree(convertUnknowns(planet.population))}</td>
      <td>{calculateWaterArea(planet.diameter, planet.surface_water)}</td>
    </tr>
  );
}
