import { getAllStars } from "../db.ts";

const allStars = await getAllStars();

console.log(allStars);
