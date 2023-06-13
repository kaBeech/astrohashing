import { Coordinates } from "../types.ts";

const getDistanceBetweenCoordinates = (
  coordinates1: Coordinates,
  coordinates2: Coordinates,
): number => {
  // Check math
  // Update calculation for Great Circle Distance (instead of Euclidean distance)
  const treatedCoordinates1Ascension = (coordinates1[0][0] * 3600) +
    (coordinates1[0][1] * 60) + coordinates1[0][2];
  const treatedCoordinates1Declination = (coordinates1[1][0] * 3600) +
    (coordinates1[1][1] * 60) + coordinates1[1][2];
  const treatedCoordinates2Ascension = (coordinates2[0][0] * 3600) +
    (coordinates2[0][1] * 60) + coordinates2[0][2];
  const treatedCoordinates2Declination = (coordinates2[1][0] * 3600) +
    (coordinates2[1][1] * 60) + coordinates2[1][2];
  const distance: number = Math.sqrt(
    Math.abs(
          treatedCoordinates1Ascension - treatedCoordinates2Ascension,
        ) ** 2 + Math.abs(
          treatedCoordinates1Declination - treatedCoordinates2Declination,
        ) ** 2,
  );
  return distance;
};

export default getDistanceBetweenCoordinates;
