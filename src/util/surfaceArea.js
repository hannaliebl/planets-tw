import { groupDigitsByThree } from "./stringHelpers";

const PI_APPROX = 3.14159265359;

export function calculateWaterArea(diameter, surfaceWater) {
  if (isNaN(parseInt(diameter)) || isNaN(parseInt(surfaceWater))) {
    return "?";
  } else {
    const surfaceArea = 4 * PI_APPROX * Math.pow(diameter / 2, 2);
    const surfaceWaterPercent = surfaceWater * 0.01;
    return groupDigitsByThree(Math.round(surfaceWaterPercent * surfaceArea));
  }
}
