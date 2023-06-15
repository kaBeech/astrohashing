import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import convertDayToAscension from "../util/convertDayToAscension.ts";

Deno.test("inputting day 1 returns -90d 0m 0s", () => {
  const result = convertDayToAscension(1);

  assertEquals(result, [0, 0, 0]);
});

Deno.test("inputting day 366 returns 24h 0m 0s", () => {
  const result = convertDayToAscension(366);

  assertEquals(result, [24, 0, 0]);
});

Deno.test("inputting day 72 returns 4d 40m 60s", () => {
  const result = convertDayToAscension(72);

  assertEquals(result, [4, 40, 6]);
});
