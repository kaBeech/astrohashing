/**
 * Open KV.
 */

import { Star } from "./types.ts";

const kv = await Deno.openKv();

/**
 * Upsert star.
 * @param star
 */

export async function upsertStar(star: Star) {
  const starKey = ["star", star.name];

  const oldStar = await kv.get<Star>(starKey);

  if (!oldStar.value) {
    const ok = await kv.atomic()
      .check(oldStar)
      .set(starKey, star)
      .commit();
    if (!ok) throw new Error("Something went wrong.");
  } else {
    const ok = await kv.atomic()
      .check(oldStar)
      .delete(["star", oldStar.value.name])
      .set(starKey, star)
      .commit();
    if (!ok) throw new Error("Something went wrong.");
  }
}

/**
 * Get all stars.
 * @returns <Star>
 */

export async function getAllStars() {
  const stars = [];
  for await (const res of kv.list({ prefix: ["star"] })) {
    stars.push(res.value);
  }
  return stars;
}

/**
 * Update star's commonName.
 * @param star
 * @param commonName
 */

export async function updateStarCommonName(star: Star, commonName: string) {
  star.commonName = commonName;
  const starKey = ["star", star.name];

  const oldStar = await kv.get<Star>(starKey);

  if (!oldStar.value) {
    throw new Error(`Star ${star.name} not found`);
  } else {
    const ok = await kv.atomic()
      .check(oldStar)
      .set(starKey, star)
      .commit();
    if (!ok) throw new Error("Something went wrong.");
  }
}
