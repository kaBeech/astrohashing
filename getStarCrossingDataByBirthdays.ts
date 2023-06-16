import getClosestStar from "./getClosestStar.ts";
import getSkyMapURL from "./getSkyMapURL.ts";
import getStarCrossing from "./getStarCrossing.ts";
import { Coordinates, Star, StarCrossingData } from "./types.ts";

const getStarCrossingDataByBirthdays = async (
  birthdays: string,
): Promise<StarCrossingData> => {
  const starCrossing: Coordinates = getStarCrossing(birthdays);
  const closestStar: Star = await getClosestStar(starCrossing);
  let infoURL = null;
  // if (closestStar.infoURL !== null) infoURL = closestStar.infoURL;
  // else {
  infoURL =
    `https://duckduckgo.com/?q=!ducky+site%3Awww.universeguide.com+star+${
      closestStar.name.split(" ")[0]
    }+${closestStar.name.split(" ")[1]}`;
  // }
  const skyMapURL = getSkyMapURL(starCrossing);
  const starCrossingData: StarCrossingData = {
    coordinates: starCrossing,
    infoURL,
    skyMapURL,
    closestStarName: String(closestStar.name),
    closestStarCommonName: String(closestStar.commonName),
  };
  return starCrossingData as StarCrossingData;
};

export default getStarCrossingDataByBirthdays;
