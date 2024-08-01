import { getAllStarCoordinates, getStarByName } from "./db.ts";
import { Coordinates, Star } from "./types.ts";
import getGreatCircleDistanceBetweenCoordinates from "./util/getGreatCircleDistanceBetweenCoordinates.ts";

const stars: Star[] = await getAllStarCoordinates() as unknown as Star[];

const getClosestStar = (starCrossing: Coordinates) => {
  let closestDistance: number | null = null;
  let closestStarName: Star | null = null;
  for (const star of stars) {
    const distance = getGreatCircleDistanceBetweenCoordinates(
      star.coordinates,
      starCrossing,
    );
    if (closestDistance === null || distance < closestDistance) {
      closestStarName = star;
      closestDistance = distance;
    }
  }
  let closestStar: Star | null = null;
  if (closestStarName !== null) {
    closestStar = getStarByName(closestStarName.name) as unknown as Star;
  }
  if (closestStar === null) {
    throw new Error("No stars found");
  }
  return closestStar;
};
export default getClosestStar;
