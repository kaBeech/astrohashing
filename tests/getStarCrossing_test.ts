import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import getStarCrossing from "../components/getStarCrossing.ts";

const birthdays = "1960-1-1,1960-7-2";

Deno.test("inputting '1960-1-1,1960-7-2' returns proper coordinates", () => {
  const result1 = getStarCrossing(birthdays);

  assertEquals(
    result1,
    [[0, 0, 0], [0, 14, 47]],
  );
});
