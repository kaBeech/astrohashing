import { Declination } from "../types.ts";
import convertDayToDeclinationAngle from "./convertDayToDeclinationAngle.ts";
import { convertRadiansToDeclination } from "./convertRadiansToCoordinates.ts";

const convertDayToDeclination = (
  dayOfYear: number,
): Declination => {
  const declinationAngle = convertDayToDeclinationAngle(dayOfYear);
  const declination: Declination = convertRadiansToDeclination(
    declinationAngle,
  );
  return declination;
};

export default convertDayToDeclination;
