import { Coordinates } from "./types";

  /**
   * Open KV.
   */
  
  const kv = await Deno.openKv();
  
  /**
   * Get StarCrossing.
   * @param birthdays
   * @returns
   */
  
  export async function getStarCrossingDataByBirthdays(birthdays: string): Promise<Coordinates> {
    // Derive starCrossing from birthdays
    const starCrossing = birthdays + birthdays as unknown as Coordinates
    const key = ["starCrossing", starCrossing];
    return (await kv.get(key)).value as Coordinates;
  }
  
