import {
  Application,
  Context,
  helpers,
  Router,
} from "https://deno.land/x/oak@v12.4.0/mod.ts";
import getStarCrossingDataByBirthdays from "./getStarCrossingDataByBirthdays.ts";
import { getAllStars, upsertStar } from "./db.ts";
import getStarCatalog from "./util/getStarCatalog.ts";
import updateCommonNamesAndInfoURLs from "./updateCommonNamesAndInfoURLs.ts";

// Populate DB

const starCatalog = getStarCatalog();

for (const star of starCatalog) {
  upsertStar(star);
}

// Update commonNames and infoURLs

updateCommonNamesAndInfoURLs();

// Start server

const { getQuery } = helpers;
const router = new Router();

router.get("/", (ctx: Context) => {
  ctx.response.body = "Successful Get request!";
});

router.get("/star-catalog", async (ctx: Context) => {
  ctx.response.body = await getAllStars();
});

router.get("/star-crossings/:birthdays", async (ctx: Context) => {
  const { birthdays } = getQuery(ctx, { mergeParams: true });
  ctx.response.body = await getStarCrossingDataByBirthdays(birthdays);
});

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
