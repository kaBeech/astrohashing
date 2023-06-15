import {
  assertAlmostEquals,
  assertEquals,
} from "https://deno.land/std@0.188.0/testing/asserts.ts";
import getGreatCircleDistanceBetweenCoordinates from "../util/getGreatCircleDistanceBetweenCoordinates.ts";

Deno.test("inputting same coordinates returns 0 radians", () => {
  const result = getGreatCircleDistanceBetweenCoordinates([0, 0], [0, 0]);

  assertEquals(result, 0);
});

Deno.test("inputting extreme ascension coordinates returns pi radians", () => {
  const result = getGreatCircleDistanceBetweenCoordinates([0, 0], [
    3.14159,
    0,
  ]);

  assertAlmostEquals(result, 3.14159);
});

Deno.test("inputting extreme declination coordinates returns pi radians", () => {
  const result = getGreatCircleDistanceBetweenCoordinates([0, 0], [
    0,
    3.14159,
  ]);

  assertAlmostEquals(result, 3.14159);
});
