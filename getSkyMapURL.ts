import { Coordinates } from "./types.ts";

const getSkyMapURL = (starCrossing: Coordinates): string => {
  // Check this for accuracy. Commented out working URL example
  // const skyMapURL = `http://www.wikisky.org/?ra=6.3991971944444&de=-52.695660555556&zoom=4&show_grid=1&show_constellation_lines=1&show_constellation_boundaries=1&show_const_names=1&show_galaxies=1&img_source=DSS2`
  const skyMapURL = `http://www.wikisky.org/?ra=${starCrossing[0]}&de=${
    starCrossing[1]
  }=3&show_grid=1&show_constellation_lines=1&show_constellation_boundaries=1&show_const_names=1&show_galaxies=1&img_source=IMG_all}`;
  return skyMapURL;
};

export default getSkyMapURL;
