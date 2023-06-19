import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import { getISDBURL } from "../util/getURL.ts";
import { Star } from "../types.ts";

const star: Star = {
  name: `Wo 9846`,
  altName: `HIP 18`,
  coordinates: [[0, 0, 1], [-4, 3, 13]],
  commonName: "TestStar",
  infoURL: null,
};

Deno.test("inputting properly formatted star.name returns proper URL", () => {
  const result1 = getISDBURL(star.name);

  assertEquals(
    result1,
    `http://www.stellar-database.com/Scripts/search_star.exe?Catalog=Wo&CatNo=9846`,
  );
});
