/**
 * Open KV.
 */
  
  const kv = await Deno.openKv();

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
