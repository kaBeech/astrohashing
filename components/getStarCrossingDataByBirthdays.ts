import getClosestStar from "./getClosestStar.ts";
import getStarCrossing from "./getStarCrossing.ts";
import { Coordinates, Star, StarCrossingData } from "../types.ts";
import { getSkyMapURL, getStaticPhotoURL } from "../util/getURL.ts";
import updateCommonNameAndInfoURL from "./updateCommonNameAndInfoURL.ts";

const getStarCrossingDataByBirthdays = (
  birthdays: string,
): StarCrossingData => {
  const starCrossing: Coordinates = getStarCrossing(birthdays);
  const closestStar: Star = getClosestStar(starCrossing);
  const staticPhotoURL = getStaticPhotoURL(starCrossing);
  const staticPhoto = null;
  const starCrossingData: StarCrossingData = {
    coordinates: starCrossing,
    skyMapURL: getSkyMapURL(starCrossing),
    staticPhotoURL: staticPhotoURL,
    staticPhoto: staticPhoto,
    closestStarName: String(closestStar.name),
    closestStarCommonName: String(closestStar.commonName),
    infoURL: closestStar.infoURL,
  };
  if (starCrossingData.closestStarCommonName === "null") {
    updateCommonNameAndInfoURL(closestStar);
    starCrossingData.closestStarCommonName = String(closestStar.commonName);
  }
  return starCrossingData;
};

export default getStarCrossingDataByBirthdays;
