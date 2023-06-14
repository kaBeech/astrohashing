import { Coordinates } from "../types.ts";

const ARC_SECONDS_IN_A_CIRCLE = 360 * 60 * 60;

const getGreatCircleDistanceBetweenCoordinates = (
  coordinates1: Coordinates,
  coordinates2: Coordinates
): number => {
  const treatedCoordinates1Ascension =
    coordinates1[0][0] * 3600 + coordinates1[0][1] * 60 + coordinates1[0][2];
  const treatedCoordinates1Declination =
    coordinates1[1][0] * 3600 + coordinates1[1][1] * 60 + coordinates1[1][2];
  const treatedCoordinates2Ascension =
    coordinates2[0][0] * 3600 + coordinates2[0][1] * 60 + coordinates2[0][2];
  const treatedCoordinates2Declination =
    coordinates2[1][0] * 3600 + coordinates2[1][1] * 60 + coordinates2[1][2];

  // these all are in radians!
  const phi1 =
    (treatedCoordinates1Declination * 2 * Math.PI) / ARC_SECONDS_IN_A_CIRCLE;
  const phi2 =
    (treatedCoordinates2Declination * 2 * Math.PI) / ARC_SECONDS_IN_A_CIRCLE;
  const l1 =
    (treatedCoordinates1Ascension * 2 * Math.PI) / ARC_SECONDS_IN_A_CIRCLE;
  const l2 =
    (treatedCoordinates2Ascension * 2 * Math.PI) / ARC_SECONDS_IN_A_CIRCLE;

  // https://en.wikipedia.org/wiki/Great-circle_distance#:~:text=It%20is%20the%20shortest%20distance,line%20through%20the%20sphere's%20interior).
  // {\displaystyle \Delta \sigma =\arccos {\bigl (}\sin \phi _{1}\sin \phi _{2}+\cos \phi _{1}\cos \phi _{2}\cos(\Delta \lambda ){\bigr )}.}
  const distance: number = Math.acos(
    Math.sin(phi1) * Math.sin(phi2) +
      Math.cos(phi1) * Math.cos(phi2) * Math.cos(l1 - l2)
  );
  return distance;
};

export default getGreatCircleDistanceBetweenCoordinates;
