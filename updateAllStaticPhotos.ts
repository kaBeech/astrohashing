import { getAllStars } from "./db.ts";
import updateStaticPhoto from "./updateStaticPhoto.ts";

const updateAllStaticPhotos = async () => {
  const starCatalog = await getAllStars();
  for (const star of starCatalog) {
    updateStaticPhoto(star);
  }
};

export default updateAllStaticPhotos;
