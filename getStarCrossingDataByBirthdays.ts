import getClosestStar from "./getClosestStar.ts";
import getInfoURL from "./getInfoURL.ts";
import getSkyMapURL from "./getSkyMapURL.ts";
import getStarCrossing from "./getStarCrossing.ts";
import { Coordinates, Star, StarCrossingData } from "./types.ts";

const getStarCrossingDataByBirthdays = (
  birthdays: string,
): StarCrossingData => {
  const starCrossing: Coordinates = getStarCrossing(birthdays);
  const closestStar: Star = getClosestStar(starCrossing);
  const infoURL = getInfoURL(closestStar);
  const skyMapURL = getSkyMapURL(starCrossing);
  const starCrossingData: StarCrossingData = {
    coordinates: starCrossing,
    infoURL,
    skyMapURL,
    closestStarCommonName: String(closestStar.commonName),
  };
  return starCrossingData as StarCrossingData;
};

export default getStarCrossingDataByBirthdays;
