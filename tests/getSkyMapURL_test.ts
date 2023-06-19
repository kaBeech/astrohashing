import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import { Coordinates } from "../types.ts";
import { getSkyMapURL } from "../util/getURL.ts";

const starCrossing: Coordinates = [[14, 39, 36.50], [-60, 50, 2.3]];

Deno.test("inputting properly formatted coordinates returns proper URL", () => {
  const result1 = getSkyMapURL(starCrossing);

  assertEquals(
    result1,
    `http://www.wikisky.org/?ra=14.044009259259258&de=-59.16602777777778&zoom=3&show_grid=1&show_constellation_lines=1&show_constellation_boundaries=1&show_const_names=1&show_galaxies=1&img_source=IMG_all}`,
  );
});
