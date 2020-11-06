import { calculateWaterArea } from "../util/surfaceArea.js";
import { convertUnknowns } from "../util/handleUnknown.js";
import { convertDigitsToCol } from "../util/formatDigits.js";

function TableRow({ planet }) {
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
      <td>{convertUnknowns(convertDigitsToCol(planet.population))}</td>
      <td>{calculateWaterArea(planet.diameter, planet.surface_water)}</td>
    </tr>
  );
}

export default TableRow;
