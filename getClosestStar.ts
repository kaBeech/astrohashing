import { getAllStars, updateStarAndCommonName } from "./db.ts";
import getInfoURL from "./getInfoURL.ts";
import { Coordinates, Star } from "./types.ts";
import getDistanceBetweenCoordinates from "./util/getDistanceBetweenCoordinates.ts";

const stars: Star[] = await getAllStars();

const getClosestStar = (starCrossing: Coordinates) => {
  let closestDistance: number | null = null;
  let closestStar: Star | null = null;
  for (const star of stars) {
    const distance = getDistanceBetweenCoordinates(
      star.coordinates,
      starCrossing,
    );
    if (
      (closestDistance === null) ||
      (distance <
        closestDistance)
    ) {
      closestStar = star;
      closestDistance = distance;
    }
  }
  if (closestStar === null) {
    throw new Error("No stars found");
  }
  if (closestStar.commonName === null) {
    const infoURL = getInfoURL(closestStar);
    let commonName = "See Comment"; // fetch the HTML from the infoURL
    commonName = commonName.split("h1")[1];
    commonName = commonName.slice(1, -2);
    updateStarAndCommonName(closestStar, commonName);
    closestStar.commonName = commonName;
  }
  return closestStar;
};
export default getClosestStar;
