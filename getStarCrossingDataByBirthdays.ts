import getClosestStar from "./getClosestStar.ts";
import getStarCrossing from "./getStarCrossing.ts";
import { Coordinates, Star, StarCrossingData } from "./types.ts";
import updateCommonNameAndInfoURL from "./updateCommonNameAndInfoURL.ts";
import updateStaticPhoto from "./updateStaticPhoto.ts";

const getStarCrossingDataByBirthdays = (
  birthdays: string,
): StarCrossingData => {
  const starCrossing: Coordinates = getStarCrossing(birthdays);
  const closestStar: Star = getClosestStar(starCrossing);
  const starCrossingData: StarCrossingData = {
    coordinates: starCrossing,
    skyMapURL: closestStar.skyMapURL,
    staticPhotoURL: closestStar.staticPhotoURL,
    staticPhoto: closestStar.staticPhoto,
    closestStarName: String(closestStar.name),
    closestStarCommonName: String(closestStar.commonName),
    infoURL: closestStar.infoURL,
  };
  if (starCrossingData.closestStarCommonName === null) {
    updateCommonNameAndInfoURL(closestStar);
  }
  if (starCrossingData.staticPhoto === null) {
    updateStaticPhoto(closestStar);
  }
  return starCrossingData;
};

export default getStarCrossingDataByBirthdays;
