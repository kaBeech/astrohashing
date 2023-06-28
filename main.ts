import {
  Application,
  Context,
  helpers,
  Router,
} from "https://deno.land/x/oak@v12.4.0/mod.ts";
import getStarCrossingDataByBirthdays from "./getStarCrossingDataByBirthdays.ts";
import { getAllStars, upsertStar } from "./db.ts";
import createStarCatalog from "./util/createStarCatalog.ts";
import updateAllCommonNamesAndInfoURLs from "./updateAllCommonNamesAndInfoURLs.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

// Populate DB
const starCatalog = await getAllStars();
if (starCatalog.length < 3) {
  const createdStarCatalog = createStarCatalog();

  for (const star of createdStarCatalog) {
    upsertStar(star);
  }
  updateAllCommonNamesAndInfoURLs();
}

// Start server

const { getQuery } = helpers;
const router = new Router();

router.get("/", (ctx: Context) => {
  ctx.response.body = "Successful Get request!";
});

router.get("/star-catalog", async (ctx: Context) => {
  ctx.response.body = await getAllStars();
});

router.get("/star-crossings/:birthdays", (ctx: Context) => {
  const { birthdays } = getQuery(ctx, { mergeParams: true });
  ctx.response.body = getStarCrossingDataByBirthdays(birthdays);
});

const app = new Application();
app.use(oakCors());

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
