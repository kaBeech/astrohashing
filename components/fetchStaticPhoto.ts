import { fetchAndParseJSON } from "../util/fetchAndParse.ts";

const fetchStaticPhoto = async (staticPhotoURL: string) => {
  try {
    const staticPhoto = await fetchAndParseJSON(staticPhotoURL);
    return staticPhoto;
  } catch (error) {
    return error;
  }
};

export default fetchStaticPhoto;
