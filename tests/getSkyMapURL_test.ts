import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import { Coordinates } from "../types.ts";
import getSkyMapURL from "../getSkyMapURL.ts";

const starCrossing: Coordinates = [[6, 23, 57.1], [-52, 41, 44.37]];

Deno.test("inputting properly formatted coordinates returns proper URL", () => {
  const result1 = getSkyMapURL(starCrossing);

  assertEquals(
    result1,
    `http://www.wikisky.org/?ra=6.3991971944444&de=-52.695660555556=3&show_grid=1&show_constellation_lines=1&show_constellation_boundaries=1&show_const_names=1&show_galaxies=1&img_source=IMG_all}`,
  );
});
