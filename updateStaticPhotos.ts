import { getAllStars, updateStarStaticPhoto } from "./db.ts";

const updateStaticPhotos = async () => {
  const starCatalog = await getAllStars();
  for (const star of starCatalog) {
    if (star.staticPhoto === null) {
      try {
        const staticPhoto = await fetch(star.staticPhotoURL);
        updateStarStaticPhoto(star, staticPhoto);
        star.staticPhoto = staticPhoto;
      } catch (error) {
        return error;
      }
    }
  }
};

export default updateStaticPhotos;
