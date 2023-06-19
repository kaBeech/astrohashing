import {
  getAllStars,
  updateStarCommonName,
  updateStarInfoURL,
  updateStarISDBURL,
  updateStarUniverseGuideURL,
} from "./db.ts";
import getISDBURL from "./getISDBURL.ts";
import getUniverseGuideURL from "./getUniverseGuideURL.ts";
import { fetchAndParseHTML } from "./util/fetchAndParse.ts";
// import getStarCatalog from "./util/getStarCatalog.ts";

const updateCommonNamesAndInfoURLs = async () => {
  // const starCatalog = getStarCatalog();
  const starCatalog = getAllStars();
  for (const star of await starCatalog) {
    if (star.commonName === null) {
      const isdbURL = getISDBURL(star.name);
      const universeGuideURL = getUniverseGuideURL(star.name);
      updateStarISDBURL(star, isdbURL);
      updateStarUniverseGuideURL(star, universeGuideURL);
      updateStarInfoURL(star, universeGuideURL);
      star.isdbURL = isdbURL;
      star.universeGuideURL = universeGuideURL;
      star.infoURL = universeGuideURL;
      setTimeout(() => {}, 1000);
      let commonName = await fetchAndParseHTML(isdbURL);
      if (commonName.indexOf("H1") > -1) {
        commonName = commonName.split("H1")[1];
        commonName = commonName.slice(1, -2);
        updateStarCommonName(star, commonName);
        star.commonName = commonName;
      } else if (star.altName !== null) {
        const altName = star.altName.replace("HIP", "HIC");
        const infoAltURL = getISDBURL(altName);
        setTimeout(() => {}, 1000);
        commonName = await fetchAndParseHTML(infoAltURL);
        if (commonName.indexOf("H1") > -1) {
          commonName = commonName.split("H1")[1];
          commonName = commonName.slice(1, -2);
          updateStarCommonName(star, commonName);
          star.commonName = commonName;
        }
      }
    }
  }
};

export default updateCommonNamesAndInfoURLs;
