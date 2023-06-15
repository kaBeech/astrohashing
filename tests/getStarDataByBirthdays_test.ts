import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import getStarCrossingDataByBirthdays from "../getStarCrossingDataByBirthdays.ts";

const birthdays = "1960-1-1,1960-7-2";

Deno.test("inputting properly formatted birthdays returns proper starCrossingData", async () => {
  const result = await getStarCrossingDataByBirthdays(birthdays);
  const starCrossing = result.coordinates;
  const closestStarCommonName = result.closestStarCommonName;
  const infoURL = result.infoURL;
  const skyMapURL = result.skyMapURL;

  assertEquals(
    starCrossing,
    [[0, 0, 0], [0, 14, 47]],
  );
  assertEquals(
    closestStarCommonName,
    `Bonner Durchmusterung -2�129`,
  );
  assertEquals(
    infoURL,
    `http://www.stellar-database.com/Scripts/search_star.exe?Catalog=Gl&CatNo=44`,
  );
  assertEquals(
    skyMapURL,
    `http://www.wikisky.org/?ra=0&de=0.24638888888888744=3&show_grid=1&show_constellation_lines=1&show_constellation_boundaries=1&show_const_names=1&show_galaxies=1&img_source=IMG_all}`,
  );
});
