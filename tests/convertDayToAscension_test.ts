import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import { Coordinates } from "../types.ts";
import convertDayToAscension from "../util/convertDayToAscension.ts";

const starCrossing: Coordinates = [
  [0, 0, 1],
  [-4, 3, 13],
];

Deno.test("testing convert day to ascension on day 0", () => {
  const result1 = convertDayToAscension(0);

  assertEquals(result1, [0, 0, 0]);
});

Deno.test("testing convert day to ascension on day 0", () => {
  const result1 = convertDayToAscension(71);

  assertEquals(result1, [4, 40, 6]);
  // (71 / 365) * 24 = 4.6... => 4
  // remainder of .6684 * 60 = 40.109... => 40
  // .109... * 60 = 6.57.. => 6 or 7 seconds => Are we rounding or truncating here?
});
