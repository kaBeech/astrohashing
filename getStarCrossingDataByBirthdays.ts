import getClosestStar from "./getClosestStar.ts";
import getInfoURL from "./getInfoURL.ts";
import getSkyMapURL from "./getSkyMapURL.ts";
import getStarCrossing from "./getStarCrossing.ts";
import { Coordinates, Star, StarCrossingData } from "./types.ts";

const getStarCrossingDataByBirthdays = async (
  birthdays: string,
): Promise<StarCrossingData> => {
  const starCrossing: Coordinates = getStarCrossing(birthdays);
  const closestStar: Star = await getClosestStar(starCrossing);
  let infoURL = null;
  if (closestStar.infoURL !== null) infoURL = closestStar.infoURL;
  else {
    infoURL = getInfoURL(closestStar.name);
  }
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
