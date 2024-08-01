import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import { Coordinates } from "../types.ts";
import getClosestStar from "../components/getClosestStar.ts";

const starCrossing: Coordinates = [[0, 0, 1], [-4, 3, 13]];

Deno.test("inputting valid coordinates returns closest star", async () => {
  const result1 = (await getClosestStar(starCrossing)).name;

  assertEquals(
    result1,
    `Wo 9846`,
  );
});
