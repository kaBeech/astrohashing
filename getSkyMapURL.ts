import { Coordinates } from "./types.ts";
import {
  convertAscensionToRadians,
  convertDeclinationToRadians,
} from "./util/convertCoordinatesToRadians.ts";
import {
  convertRadiansToURLFriendlyAscension,
  convertRadiansToURLFriendlyDeclination,
} from "./util/convertRadiansToURLFriendly.ts";

const getSkyMapURL = (starCrossing: Coordinates): string => {
  const urlFriendlyAscension = convertRadiansToURLFriendlyAscension(
    convertAscensionToRadians(starCrossing[0]),
  );
  const urlFriendlyDeclination = convertRadiansToURLFriendlyDeclination(
    convertDeclinationToRadians(starCrossing[1]),
  );
  // const skyMapURL = `http://www.wikisky.org/?ra=6.3991971944444&de=-52.695660555556&zoom=4&show_grid=1&show_constellation_lines=1&show_constellation_boundaries=1&show_const_names=1&show_galaxies=1&img_source=DSS2`
  const skyMapURL =
    // `http://www.wikisky.org/?ra=${urlFriendlyAscension}&de=${urlFriendlyDeclination}&zoom=3&show_grid=1&show_constellation_lines=1&show_constellation_boundaries=1&show_const_names=1&show_galaxies=1&img_source=DSS2`;
    `http://server1.sky-map.org/skywindow?ra=${urlFriendlyAscension}&de=${urlFriendlyDeclination}&zoom=5&show_grid=1&show_constellation_lines=1&show_constellation_boundaries=1&show_const_names=1&show_galaxies=1&img_source=DSS2`;
  return skyMapURL;
};

export default getSkyMapURL;
