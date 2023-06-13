import { Ascension, Coordinates, Declination, Star } from "../types.ts";
import convertMultiLineFileToArray from "./convertFileToArray.ts";

const starsRaw = await convertMultiLineFileToArray("./starData/table1.dat");

const getStarName = (rawStar: string): string => {
  const starSplit = rawStar.split(" ");
  const starName = `${starSplit[0]} ${starSplit[1]}`;
  return starName;
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

const getStarCatalogue = () => {
  const starsFormatted: Star[] = [];
  const starNames: string[] = [];

  for (const rawStar of starsRaw) {
    const starFormatted: Star = {
      name: getStarName(rawStar),
      coordinates: getStarCoordinates(rawStar),
      commonName: null,
    };
    if (!starNames.includes(starFormatted.name)) {
      starNames.push(starFormatted.name);
      starsFormatted.push(starFormatted);
    }
  }

  return starNames;
};

export default getStarCatalogue;
