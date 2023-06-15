import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import getStarCrossingDataByBirthdays from "../getStarCrossingDataByBirthdays.ts";

const birthdays1 = "1960-1-1,1960-7-2";
const birthdays2 = "1960-1-1,1960-4-17";

Deno.test("inputting '1960-1-1,1960-7-2' returns proper starCrossingData", async () => {
  const result = await getStarCrossingDataByBirthdays(birthdays1);
  const starCrossing = result.coordinates;
  const closestStarCommonName = result.closestStarCommonName.slice(0, 21);
  const infoURL = result.infoURL;
  const skyMapURL = result.skyMapURL;

  assertEquals(
    starCrossing,
    [[0, 0, 0], [0, 14, 47]],
  );
  assertEquals(
    closestStarCommonName,
    `Bonner Durchmusterung`,
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

Deno.test("inputting '1960-1-1,1960-4-17' returns proper starCrossingData including commonName from altName", async () => {
  const result = await getStarCrossingDataByBirthdays(birthdays2);
  const starCrossing = result.coordinates;
  const closestStarCommonName = result.closestStarCommonName.slice(0, 21);
  const infoURL = result.infoURL;
  const skyMapURL = result.skyMapURL;

  assertEquals(
    starCrossing,
    [[0, 0, 0], [-38, 46, 1]],
  );
  assertEquals(
    closestStarCommonName,
    "Cordoba Durchmusterun",
  );
  assertEquals(
    infoURL,
    `http://www.stellar-database.com/Scripts/search_star.exe?Catalog=GJ&CatNo=4388`,
  );
  assertEquals(
    skyMapURL,
    `http://www.wikisky.org/?ra=0&de=-37.23305555555556=3&show_grid=1&show_constellation_lines=1&show_constellation_boundaries=1&show_const_names=1&show_galaxies=1&img_source=IMG_all}`,
  );
});
