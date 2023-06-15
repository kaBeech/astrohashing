import { updateStarCommonName, updateStarInfoURL } from "./db.ts";
import getInfoURL from "./getInfoURL.ts";
import { fetchAndParseHTML } from "./util/fetchAndParse.ts";
import getStarCatalog from "./util/getStarCatalog.ts";

const updateCommonNamesAndInfoURLs = async () => {
  const starCatalog = getStarCatalog();
  let i = 0;
  for (const star of starCatalog) {
    // if (i < 10) {
    if (star.infoURL === null) {
      const infoURL = getInfoURL(star.name);
      setTimeout(() => {}, 2000);
      let commonName = await fetchAndParseHTML(infoURL);
      if (commonName.indexOf("H1") > -1) {
        commonName = commonName.split("H1")[1];
        commonName = commonName.slice(1, -2);
        updateStarCommonName(star, commonName);
        star.commonName = commonName;
        updateStarInfoURL(star, infoURL);
        star.infoURL = infoURL;
      } else if (star.altName !== null) {
        const altName = star.altName.replace("HIP", "HIC");
        const infoAltURL = getInfoURL(altName);
        setTimeout(() => {}, 2000);
        commonName = await fetchAndParseHTML(infoAltURL);
        if (commonName.indexOf("H1") > -1) {
          commonName = commonName.split("H1")[1];
          commonName = commonName.slice(1, -2);
          updateStarCommonName(star, commonName);
          star.commonName = commonName;
          updateStarInfoURL(star, infoAltURL);
          star.infoURL = infoAltURL;
        }
      } else {
        const fallbackURL = `https://duckduckgo.com/?q=!ducky+${
          star.name.split(" ")[0]
        } ${star.name.split(" ")[1]}`;
        updateStarInfoURL(star, fallbackURL);
        star.infoURL = fallbackURL;
      }
      i++;
    }
    // }
  }
};

export default updateCommonNamesAndInfoURLs;
