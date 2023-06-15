import { Ascension } from "../types.ts";
import convertDayToAscensionAngle from "./convertDayToAscensionAngle.ts";
import { convertRadiansToAscension } from "./convertRadiansToCoordinates.ts";

const convertDayToAscension = (dayOfYear: number): Ascension => {
  const ascensionAngle = convertDayToAscensionAngle(dayOfYear);
  const ascension: Ascension = convertRadiansToAscension(ascensionAngle);
  return ascension;
};

export default convertDayToAscension;
