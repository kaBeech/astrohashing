import { getAllStars } from "./db.ts";
import updateCommonNameAndInfoURL from "./updateCommonNameAndInfoURL.ts";
// import createStarCatalog from "./util/createStarCatalog.ts";

const updateAllCommonNamesAndInfoURLs = async () => {
  // const starCatalog = createStarCatalog();
  const starCatalog = getAllStars();
  for (const star of await starCatalog) {
    updateCommonNameAndInfoURL(star);
  }
};

export default updateAllCommonNamesAndInfoURLs;
