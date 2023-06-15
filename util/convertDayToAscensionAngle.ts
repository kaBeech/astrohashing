import { Ascension } from "../types.ts";

const dayAscensionCoefficient = 24 * 60 * 60;

const convertDayToAscensionAngle = (dayOfYear: number): number => {
  const ascension: number = (dayOfYear / 366) * 2 * Math.PI;
  return ascension;
};

export default convertDayToAscensionAngle;
