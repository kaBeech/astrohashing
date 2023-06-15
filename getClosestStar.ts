import { getAllStars, updateStarCommonName } from "./db.ts";
import getInfoURL from "./getInfoURL.ts";
import { Coordinates, Star } from "./types.ts";
import { fetchAndParseHTML } from "./util/fetchAndParse.ts";
import getGreatCircleDistanceBetweenCoordinates from "./util/getGreatCircleDistanceBetweenCoordinates.ts";

const stars: Star[] = await getAllStars() as unknown as Star[];

const getClosestStar = async (starCrossing: Coordinates) => {
  let closestDistance: number | null = null;
  let closestStar: Star | null = null;
  for (const star of stars) {
    const distance = getGreatCircleDistanceBetweenCoordinates(
      star.coordinates,
      starCrossing,
    );
    if (closestDistance === null || distance < closestDistance) {
      closestStar = star;
      closestDistance = distance;
    }
  }
  if (closestStar === null) {
    throw new Error("No stars found");
  }
  if (closestStar.commonName === null) {
    const infoURL = getInfoURL(closestStar.name);
    let commonName = await fetchAndParseHTML(infoURL);
    if (commonName.indexOf("H1") > -1) {
      commonName = commonName.split("H1")[1];
      commonName = commonName.slice(1, -2);
      updateStarCommonName(closestStar, commonName);
      closestStar.commonName = commonName;
    } else if (closestStar.altName !== null) {
      const infoAltURL = getInfoURL(closestStar.altName);
      commonName = await fetchAndParseHTML(infoAltURL);
      if (commonName.indexOf("H1") > -1) {
        commonName = commonName.split("H1")[1];
        commonName = commonName.slice(1, -2);
        updateStarCommonName(closestStar, commonName);
        closestStar.commonName = commonName;
      }
    } else {
      console.log("commonName not found in ISDB");
    }
  }
  return closestStar;
};
export default getClosestStar;
