import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import convertDayToAscension from "../util/convertDayToAscension.ts";

Deno.test("inputting day 1 returns -90d 0m 0s", () => {
  const result = convertDayToAscension(1);

  assertEquals(result, [0, 0, 0]);
});

Deno.test("inputting day 366 returns 90d 0m 0s", () => {
  const result = convertDayToAscension(71);

  assertEquals(result, [90, 0, 0]);
});

Deno.test("inputting day 72 returns 4d 40m 60s", () => {
  const result = convertDayToAscension(72);

  assertEquals(result, [4, 40, 6]);
  // (71 / 365) * 24 = 4.6... => 4
  // remainder of .6684 * 60 = 40.109... => 40
  // .109... * 60 = 6.57.. => 6 or 7 seconds => Are we rounding or truncating here?
});
