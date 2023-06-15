import { Ascension, Declination } from "../types.ts";

const ARC_SECONDS_IN_A_CIRCLE = 360 * 60 * 60;

const convertAscensionToRadians = (ascension: Ascension) => {
  const ascensionArcSeconds = (ascension[0] / 24) * 360 * 3600 +
    ascension[1] * 60 + ascension[2];
  const radians = (ascensionArcSeconds * 2 * Math.PI) /
    ARC_SECONDS_IN_A_CIRCLE;
  return radians;
};
const convertDeclinationToRadians = (declination: Declination) => {
  const declinationArcSeconds = (declination[0] + 90) * 3600 +
    declination[1] * 60 + declination[2];
  const radians = (declinationArcSeconds * 2 * Math.PI) /
    ARC_SECONDS_IN_A_CIRCLE;
  return radians;
};

export { convertAscensionToRadians, convertDeclinationToRadians };
