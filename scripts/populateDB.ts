import { upsertStar } from "../db.ts";
import createStarCatalog from "../util/createStarCatalog.ts";

const starCatalog = createStarCatalog();

for (const star of starCatalog) {
  upsertStar(star);
}
