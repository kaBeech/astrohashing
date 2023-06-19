import { Ascension, Coordinates, Declination, Star } from "../types.ts";
import convertMultiLineFileToArray from "./convertFileToArray.ts";
import { getISDBURL, getUniverseGuideURL } from "./getURL.ts";

const starsRaw = await convertMultiLineFileToArray("./starData/table1.dat");

const getStarName = (rawStar: string): string => {
  const starSplit = rawStar.split(" ");
  const starName = `${starSplit[0]} ${starSplit[1]}`;
  return starName;
};

const getStarAltName = (rawStar: string): string | null => {
  const altNameSlice = rawStar.slice(22, 35);
  const altNameSplit = altNameSlice.split(" ");
  let starAltName = null;
  if (altNameSplit.length < 10) {
    starAltName = `${altNameSplit[0]} ${altNameSplit[1]}`;
  }
  return starAltName;
};

const getStarCoordinates = (rawStar: string): Coordinates => {
  const ascensionHours = rawStar.slice(36, 38);
  const ascensionMinutes = rawStar.slice(39, 41);
  const ascensionSeconds = rawStar.slice(42, 47);
  const starAscension: Ascension = [
    +ascensionHours,
    +ascensionMinutes,
    +ascensionSeconds,
  ];
  const declinationDegrees = rawStar.slice(48, 51);
  const declinationMinutes = rawStar.slice(52, 54);
  const declinationSeconds = rawStar.slice(55, 59);
  const starDeclination: Declination = [
    +declinationDegrees,
    +declinationMinutes,
    +declinationSeconds,
  ];
  const starCoordinates: Coordinates = [starAscension, starDeclination];
  return starCoordinates;
};

const createStarCatalog = (): Star[] => {
  const starsFormatted: Star[] = [];
  const starNames: string[] = [];

  for (const rawStar of starsRaw) {
    const starName = getStarName(rawStar);
    const starCoordinates = getStarCoordinates(rawStar);
    const universeGuideURL = getUniverseGuideURL(starName);
    const starFormatted: Star = {
      name: starName,
      altName: getStarAltName(rawStar),
      coordinates: starCoordinates,
      commonName: null,
      infoURL: universeGuideURL,
      isdbURL: getISDBURL(starName),
      universeGuideURL: universeGuideURL,
    };
    if (!starNames.includes(starFormatted.name)) {
      starNames.push(starFormatted.name);
      starsFormatted.push(starFormatted);
    }
  }

  return starsFormatted;
};

export default createStarCatalog;
