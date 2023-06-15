import { getAllStars, updateStarCommonName, updateStarInfoURL } from "./db.ts";
import getInfoURL from "./getInfoURL.ts";
import { Coordinates, Star } from "./types.ts";
// import { fetchAndParseHTML } from "./util/fetchAndParse.ts";
import getGreatCircleDistanceBetweenCoordinates from "./util/getGreatCircleDistanceBetweenCoordinates.ts";

const stars: Star[] = await getAllStars() as unknown as Star[];

// const getClosestStar = async (starCrossing: Coordinates) => {
const getClosestStar = (starCrossing: Coordinates) => {
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
    // let commonName = await fetchAndParseHTML(infoURL);
    let commonName = "Hmm<H1>Test Fetch</H1>Weird";
    if (commonName.indexOf("H1") > -1) {
      commonName = commonName.split("H1")[1];
      commonName = commonName.slice(1, -2);
      updateStarCommonName(closestStar, commonName);
      closestStar.commonName = commonName;
      updateStarInfoURL(closestStar, infoURL);
      closestStar.infoURL = infoURL;
    } else if (closestStar.altName !== null) {
      const altName = closestStar.altName.replace("HIP", "HIC");
      const infoAltURL = getInfoURL(altName);
      // commonName = await fetchAndParseHTML(infoAltURL);
      commonName = "Hmm<H1>Test FetchAgain</H1>Weird";
      if (commonName.indexOf("H1") > -1) {
        commonName = commonName.split("H1")[1];
        commonName = commonName.slice(1, -2);
        updateStarCommonName(closestStar, commonName);
        closestStar.commonName = commonName;
        updateStarInfoURL(closestStar, infoAltURL);
        closestStar.infoURL = infoAltURL;
      }
    } else {
      console.log("commonName not found in ISDB");
      const fallbackURL =
        `https://duckduckgo.com/?q=!ducky+${closestStar.name}`;
      updateStarInfoURL(closestStar, fallbackURL);
    }
  }
  return closestStar;
};
export default getClosestStar;
