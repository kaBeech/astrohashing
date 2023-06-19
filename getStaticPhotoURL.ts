import { Coordinates } from "./types.ts";
import {
  convertAscensionToRadians,
  convertDeclinationToRadians,
} from "./util/convertCoordinatesToRadians.ts";
import {
  convertRadiansToURLFriendlyAscension,
  convertRadiansToURLFriendlyDeclination,
} from "./util/convertRadiansToURLFriendly.ts";

const getStaticPhotoURL = (starCrossing: Coordinates): string => {
  const urlFriendlyAscension = convertRadiansToURLFriendlyAscension(
    convertAscensionToRadians(starCrossing[0]),
  );
  const urlFriendlyDeclination = convertRadiansToURLFriendlyDeclination(
    convertDeclinationToRadians(starCrossing[1]),
  );

  const skyMapURL =
    `http://www.wikisky.org/imgcut?survey=DSS2&img_id=all&angle=15&ra=${urlFriendlyAscension}&de=${urlFriendlyDeclination}&width=800&height=800&projection=tan&interpolation=bicubic&jpeg_quality=0.8&output_type=jpeg`;
  return skyMapURL;
};

export default getStaticPhotoURL;
