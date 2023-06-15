import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import getStarCrossingDataByBirthdays from "../getStarCrossingDataByBirthdays.ts";

const birthdays = "1960-1-1,1960-7-2";

Deno.test("move in upwards direction returns proper coordinates", () => {
  const result = getStarCrossingDataByBirthdays(birthdays);
  const starCrossing = result.coordinates;
  const closestStarCommonName = result.closestStarCommonName;
  const infoURL = result.infoURL;
  const skyMapURL = result.skyMapURL;

  assertEquals(
    starCrossing,
    [[0, 0, 0], [0, 0, 0]],
  );
  assertEquals(
    closestStarCommonName,
    `Wo 9846`,
  );
  assertEquals(
    infoURL,
    `http://www.stellar-database.com/Scripts/search_star.exe?Catalog=Wo&CatNo=9846`,
  );
  assertEquals(
    skyMapURL,
    `http://www.wikisky.org/?ra=6.3991971944444&de=-52.695660555556=3&show_grid=1&show_constellation_lines=1&show_constellation_boundaries=1&show_const_names=1&show_galaxies=1&img_source=IMG_all}`,
  );
});
