import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import {
  convertAscensionToRadians,
  convertDeclinationToRadians,
} from "../util/convertCoordinatesToRadians.ts";

Deno.test("inputting [0,0,0] returns 0 radians", () => {
  const result = convertAscensionToRadians([0, 0, 0]);

  assertEquals(result, 0);
});

Deno.test("inputting [-90,0,0] returns 0 radians", () => {
  const result = convertDeclinationToRadians([0, 0, 0]);

  assertEquals(result, 0);
});

Deno.test("inputting [12,0,0] returns pi radians", () => {
  const result = convertAscensionToRadians([12, 0, 0]);

  assertEquals(result, 3.1415926535);
});

Deno.test("inputting [90,0,0] returns pi radians", () => {
  const result = convertDeclinationToRadians([90, 0, 0]);

  assertEquals(result, 3.1415926535);
});
