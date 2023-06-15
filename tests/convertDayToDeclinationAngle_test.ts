import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import convertDayToDeclinationAngle from "../util/convertDayToDeclinationAngle.ts";

Deno.test("inputting day 1 returns 0 radians", () => {
  const result = convertDayToDeclinationAngle(1);

  assertEquals(result, 0);
});

Deno.test("inputting day 366 returns pi radians", () => {
  const result1 = convertDayToDeclinationAngle(366);

  assertEquals(result1, 3.1415926535);
});
