import { Ascension, Declination } from "../types.ts";

const convertAscensionToRadians = (ascension: Ascension) => {
  return ascension[0];
};
const convertDeclinationToRadians = (declination: Declination) => {
  return declination[0];
};

export { convertAscensionToRadians, convertDeclinationToRadians };
