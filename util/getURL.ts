import { Coordinates } from "../types.ts";
import {
  convertAscensionToRadians,
  convertDeclinationToRadians,
} from "../util/convertCoordinatesToRadians.ts";
import {
  convertRadiansToURLFriendlyAscension,
  convertRadiansToURLFriendlyDeclination,
} from "../util/convertRadiansToURLFriendly.ts";

const getISDBURL = (starName: string): string => {
  const starNameSplit = starName.split(" ");
  const infoURL =
    `http://www.stellar-database.com/Scripts/search_star.exe?Catalog=${
      starNameSplit[0]
    }&CatNo=${starNameSplit[1]}`;
  return infoURL;
};

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
    `http://server1.sky-map.org/skywindow?ra=${urlFriendlyAscension}&de=${urlFriendlyDeclination}&zoom=3&show_grid=1&show_constellation_lines=1&show_constellation_boundaries=1&show_const_names=1&show_galaxies=1&img_source=DSS2`;
  return skyMapURL;
};

const getStaticPhotoURL = (starCrossing: Coordinates): string => {
  const urlFriendlyAscension = convertRadiansToURLFriendlyAscension(
    convertAscensionToRadians(starCrossing[0]),
  );
  const urlFriendlyDeclination = convertRadiansToURLFriendlyDeclination(
    convertDeclinationToRadians(starCrossing[1]),
  );

  const staticPhotoURL =
    `http://www.wikisky.org/imgcut?survey=DSS2&img_id=all&angle=15&ra=${urlFriendlyAscension}&de=${urlFriendlyDeclination}&width=800&height=800&projection=tan&interpolation=bicubic&jpeg_quality=0.8&output_type=jpeg`;
  return staticPhotoURL;
};

const getUniverseGuideURL = (starName: string): string => {
  const universeGuideURL =
    `https://duckduckgo.com/?q=!ducky+site%3Awww.universeguide.com+star+${starName}`;
  return universeGuideURL;
};

export { getISDBURL, getSkyMapURL, getStaticPhotoURL, getUniverseGuideURL };
