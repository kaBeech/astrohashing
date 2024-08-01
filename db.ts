/**
 * Open KV.
 */

import fetchStaticPhoto from "./fetchStaticPhoto.ts";
import { Coordinates, Star, StaticPhoto } from "./types.ts";
import { getStaticPhotoURL } from "./util/getURL.ts";

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
 * Get all star coordinates.
 * @returns <Star>
 */

export async function getAllStarCoordinates() {
  const stars = [];
  for await (const res of kv.list({ prefix: ["star"] })) {
    stars.push({ coordinates: res.value.coordinates, name: res.value.name });
  }
  return stars;
}

/**
 * Get a star by name.
 * @returns <Star>
 */

export async function getStarByName(name: string) {
  const starKey = ["star", name];

  const star = await kv.get<Star>(starKey);

  if (!star.value) {
    return null;
  } else {
    return star;
  }
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

// export async function updateStarStaticPhoto(
//   star: Star,
//   staticPhoto: JSON,
// ) {
//   star.staticPhoto = staticPhoto;
//   const starKey = ["star", star.name];

//   const oldStar = await kv.get<Star>(starKey);

//   if (!oldStar.value) {
//     throw new Error(`Star ${star.name} not found`);
//   } else {
//     const ok = await kv.atomic()
//       .check(oldStar)
//       .set(starKey, star)
//       .commit();
//     if (!ok) throw new Error("Something went wrong.");
//   }
// }

/**
 * Get and populate staticPhoto.
 * @param staticPhoto
 */

export async function getAndPopulateStaticPhoto(
  birthdays: string,
  coordinates: Coordinates,
) {
  const staticPhotoKey = ["staticPhoto", birthdays];

  const oldStaticPhoto = await kv.get<StaticPhoto>(staticPhotoKey);

  if (!oldStaticPhoto.value) {
    const staticPhoto: StaticPhoto = {
      birthdays: birthdays,
      staticPhoto: await fetchStaticPhoto(getStaticPhotoURL(coordinates)),
    };
    const ok = await kv.atomic()
      .check(oldStaticPhoto)
      .set(staticPhotoKey, staticPhoto)
      .commit();
    if (!ok) throw new Error("Something went wrong.");
    return staticPhoto.staticPhoto;
  } else {
    return oldStaticPhoto;
  }
}

/**
 * Get all staticPhotos
 * @returns <StaticPhoto>
 */

export async function getAllStaticPhotos() {
  const staticPhotos = [];
  for await (const res of kv.list({ prefix: ["staticPhoto"] })) {
    staticPhotos.push(res.value);
  }
  return staticPhotos;
}

/**
 * Get staticPhoto.
 * @param staticPhoto
 */

export async function getStaticPhoto(birthdays: string) {
  const staticPhotoKey = ["staticPhoto", birthdays];

  const staticPhotoInDB = await kv.get<StaticPhoto>(staticPhotoKey);

  if (!staticPhotoInDB.value) {
    return null;
  } else {
    return staticPhotoInDB;
  }
}
