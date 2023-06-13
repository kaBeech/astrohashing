import { upsertStar } from "../db.ts";
import getStarCatalog from "../util/getStarCatalog.ts";

const starCatalog = getStarCatalog();

for (const star of starCatalog) {
  upsertStar(star);
}
