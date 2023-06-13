import {
  Application,
  Context,
  helpers,
  Router,
} from "https://deno.land/x/oak@v12.4.0/mod.ts";
import getStarCrossingDataByBirthdays from "./getStarCrossingDataByBirthdays.ts";

const { getQuery } = helpers;
const router = new Router();

router
  .get("/star-crossings/:birthdays", async (ctx: Context) => {
    const { birthdays } = getQuery(ctx, { mergeParams: true });
    ctx.response.body = await getStarCrossingDataByBirthdays(birthdays);
  });

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
