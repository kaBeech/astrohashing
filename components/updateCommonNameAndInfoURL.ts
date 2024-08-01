import { updateStarCommonName, updateStarInfoURL } from "../db.ts";
import { getISDBURL } from "../util/getURL.ts";
import { fetchAndParseHTML } from "../util/fetchAndParse.ts";
import { Star } from "../types.ts";

const updateCommonNameAndInfoURL = async (star: Star) => {
  if (star.commonName === null) {
    let commonName: string = await fetchAndParseHTML(star.isdbURL);
    if (typeof commonName === "string" && commonName.indexOf("H1") > -1) {
      commonName = commonName.split("H1")[1];
      commonName = commonName.slice(1, -2);
      updateStarCommonName(star, commonName);
      star.commonName = commonName;
      updateStarInfoURL(star, star.isdbURL);
      star.infoURL = star.isdbURL;
    } else if (typeof commonName === "string" && star.altName !== null) {
      const altName = star.altName.replace("HIP", "HIC");
      const isdbAltURL = getISDBURL(altName);
      commonName = await fetchAndParseHTML(isdbAltURL);
      if (commonName.indexOf("H1") > -1) {
        commonName = commonName.split("H1")[1];
        commonName = commonName.slice(1, -2);
        updateStarCommonName(star, commonName);
        star.commonName = commonName;
        updateStarInfoURL(star, isdbAltURL);
        star.infoURL = isdbAltURL;
      }
    }
  }
};

export default updateCommonNameAndInfoURL;
