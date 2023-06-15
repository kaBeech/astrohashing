import {
  assertAlmostEquals,
  assertEquals,
} from "https://deno.land/std@0.188.0/testing/asserts.ts";
import getGreatCircleDistanceBetweenCoordinates from "../util/getGreatCircleDistanceBetweenCoordinates.ts";

Deno.test("inputting same coordinates returns 0 radians", () => {
  const result = getGreatCircleDistanceBetweenCoordinates([[0, 0, 0], [
    0,
    0,
    0,
  ]], [[0, 0, 0], [0, 0, 0]]);

  assertEquals(result, 0);
});

Deno.test("inputting extreme ascension coordinates returns pi radians", () => {
  const result = getGreatCircleDistanceBetweenCoordinates([[0, 0, 0], [
    0,
    0,
    0,
  ]], [[12, 0, 0], [0, 0, 0]]);

  assertEquals(result, 3.141592653589793);
});

Deno.test("inputting extreme declination coordinates returns pi radians", () => {
  const result = getGreatCircleDistanceBetweenCoordinates([[0, 0, 0], [
    -90,
    0,
    0,
  ]], [[0, 0, 0], [90, 0, 0]]);

  assertEquals(result, 3.141592653589793);
});
