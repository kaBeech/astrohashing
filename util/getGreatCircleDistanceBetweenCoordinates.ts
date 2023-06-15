import { Coordinates } from "../types.ts";
import {
  convertAscensionToRadians,
  convertDeclinationToRadians,
} from "./convertCoordinatesToRadians.ts";

const getGreatCircleDistanceBetweenCoordinates = (
  coordinates1: Coordinates,
  coordinates2: Coordinates,
): number => {
  const phi1 = convertAscensionToRadians(coordinates1[0]);
  const phi2 = convertAscensionToRadians(coordinates2[0]);
  const lambda1 = convertDeclinationToRadians(coordinates1[1]);
  const lambda2 = convertDeclinationToRadians(coordinates2[1]);

  const distance: number = Math.acos(
    Math.sin(phi1) * Math.sin(phi2) +
      Math.cos(phi1) * Math.cos(phi2) * Math.cos(lambda1 - lambda2),
  );
  return distance;
};

export default getGreatCircleDistanceBetweenCoordinates;
