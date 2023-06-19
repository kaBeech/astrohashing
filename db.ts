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
 * Delete all stars.
 */

export async function deleteAllStars() {
  for await (const res of kv.list({ prefix: ["star"] })) {
    kv.delete(res.key);
  }
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

/**
 * Update star's infoURL.
 * @param star
 * @param infoURL
 */

export async function updateStarInfoURL(star: Star, infoURL: string) {
  star.infoURL = infoURL;
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

export async function updateStarISDBURL(star: Star, isdbURL: string) {
  star.isdbURL = isdbURL;
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

export async function updateStarUniverseGuideURL(
  star: Star,
  universeGuideURL: string,
) {
  star.universeGuideURL = universeGuideURL;
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
