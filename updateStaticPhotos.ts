import { getAllStars, updateStarStaticPhoto } from "./db.ts";
import { fetchAndParseJSON } from "./util/fetchAndParse.ts";

const updateStaticPhotos = async () => {
  const starCatalog = await getAllStars();
  for (const star of starCatalog) {
    if (star.staticPhoto === null) {
      try {
        const staticPhoto = await fetchAndParseJSON(star.staticPhotoURL);
        updateStarStaticPhoto(star, staticPhoto);
        star.staticPhoto = staticPhoto;
      } catch (error) {
        return error;
      }
    }
  }
};

export default updateStaticPhotos;
