import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import convertDayToAscensionAngle from "../util/convertDayToAscensionAngle.ts";

Deno.test("inputting day 1 returns 0 radians", () => {
  const result = convertDayToAscensionAngle(0);

  assertEquals(result, 0);
});

Deno.test("inputting day 366 returns 2 pi radians", () => {
  const result1 = convertDayToAscensionAngle(366);

  assertEquals(result1, 6.283185307179586);
});
