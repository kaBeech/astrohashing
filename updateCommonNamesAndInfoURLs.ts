import { getAllStars, updateStarCommonName } from "./db.ts";
import { getISDBURL } from "./util/getURL.ts";
import { fetchAndParseHTML } from "./util/fetchAndParse.ts";
// import createStarCatalog from "./util/createStarCatalog.ts";

const updateCommonNamesAndInfoURLs = async () => {
  // const starCatalog = createStarCatalog();
  const starCatalog = getAllStars();
  for (const star of await starCatalog) {
    if (star.commonName === null) {
      setTimeout(() => {}, 1000);
      let commonName = await fetchAndParseHTML(star.isdbURL);
      if (commonName.indexOf("H1") > -1) {
        commonName = commonName.split("H1")[1];
        commonName = commonName.slice(1, -2);
        updateStarCommonName(star, commonName);
        star.commonName = commonName;
        // updateStarInfoURL(star, isdbURL);
        // star.infoURL = isdbURL;
      } else if (star.altName !== null) {
        const altName = star.altName.replace("HIP", "HIC");
        const isdbAltURL = getISDBURL(altName);
        setTimeout(() => {}, 1000);
        commonName = await fetchAndParseHTML(isdbAltURL);
        if (commonName.indexOf("H1") > -1) {
          commonName = commonName.split("H1")[1];
          commonName = commonName.slice(1, -2);
          updateStarCommonName(star, commonName);
          star.commonName = commonName;
          // updateStarInfoURL(star, isdbAltURL);
          // star.infoURL = isdbURL;
        }
      }
    }
  }
};

export default updateCommonNamesAndInfoURLs;
