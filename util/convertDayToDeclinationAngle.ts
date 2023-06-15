import { Declination } from "../types.ts";

const dayDeclinationCoefficient = 180 * 60 * 60;

const convertDayToDeclinationAngle = (dayOfYear: number): number => {
  const declination: number = ((dayOfYear - 1) / 365) * Math.PI;
  return declination;
};

export default convertDayToDeclinationAngle;
