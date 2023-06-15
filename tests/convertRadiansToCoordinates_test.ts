import { assertEquals } from "https://deno.land/std@0.188.0/testing/asserts.ts";
import {
  convertRadiansToAscension,
  convertRadiansToDeclination,
} from "../util/convertRadiansToCoordinates.ts";

Deno.test("inputting 0 radians returns [0,0,0]", () => {
  const result = convertRadiansToAscension(0);

  assertEquals(result, [0, 0, 0]);
});

Deno.test("inputting 0 radians returns [-90,0,0]", () => {
  const result = convertRadiansToDeclination(0);

  assertEquals(result, [-90, 0, 0]);
});

Deno.test("inputting pi radians returns [12,0,0]", () => {
  const result = convertRadiansToAscension(3.1415926535);

  assertEquals(result, [12, 0, 0]);
});

Deno.test("inputting pi radians returns [90,0,0]", () => {
  const result = convertRadiansToDeclination(3.1415926535);

  assertEquals(result, [90, 0, 0]);
});
