import { Ascension } from "../types";

const dayAscensionCoefficient = 24 * 60 * 60;

const convertDayToAscension = (dayOfYear: number): Ascension => {
  const rawAscension: number = (dayOfYear / 366) * dayAscensionCoefficient;
  let treatedAscension: number = rawAscension / 24;
  //   check these for accuracy:
  const hours: number = Math.floor(treatedAscension);
  treatedAscension = (treatedAscension - hours) * 100 / 60;
  const minutes: number = Math.floor(treatedAscension);
  treatedAscension = (treatedAscension - minutes) * 100 / 60;
  const seconds: number = Math.floor(treatedAscension);
  const ascension: Ascension = [hours, minutes, seconds];
  return ascension;
};

export default convertDayToAscension;
