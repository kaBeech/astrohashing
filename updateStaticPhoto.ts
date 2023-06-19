import { updateStarStaticPhoto } from "./db.ts";
import { Star } from "./types.ts";
import { fetchAndParseJSON } from "./util/fetchAndParse.ts";

const updateStaticPhoto = async (star: Star) => {
  if (star.staticPhoto === null) {
    try {
      const staticPhoto = await fetchAndParseJSON(star.staticPhotoURL);
      updateStarStaticPhoto(star, staticPhoto);
      star.staticPhoto = staticPhoto;
    } catch (error) {
      return error;
    }
  }
};

export default updateStaticPhoto;
