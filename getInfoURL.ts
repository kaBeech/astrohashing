import { Star } from "./types.ts";

const getInfoURL = (star: Star): string => {
  const starName = star.name.split(" ");
  const infoURL =
    `http://www.stellar-database.com/Scripts/search_star.exe?Catalog=${
      starName[0]
    }&CatNo=${starName[1]}`;
  return infoURL;
};

export default getInfoURL;
