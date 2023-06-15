import { Ascension, Declination } from "../types.ts";

// const ARC_SECONDS_IN_A_CIRCLE = 360 * 60 * 60;

//   const declinationArcSeconds = (ARC_SECONDS_IN_A_CIRCLE * radians) /
//     (2 * Math.PI);

const convertRadiansToAscension = (radians: number): Ascension => {
  const ascensionInArcSeconds = radians / (2 * Math.PI) * 24 * 60 * 60;
  const ascensionHours = Math.floor(ascensionInArcSeconds / (60 * 60));
  const ascensionMinutes = Math.floor(
    (ascensionInArcSeconds - (ascensionHours * 60 * 60)) / 60,
  );
  const ascensionSeconds = Math.floor(
    ascensionInArcSeconds - (ascensionHours * 60 * 60) -
      (ascensionMinutes * 60),
  );
  const ascension: Ascension = [
    ascensionHours,
    ascensionMinutes,
    ascensionSeconds,
  ];
  return ascension;
};
const convertRadiansToDeclination = (radians: number): Declination => {
  const declinationInArcSeconds = radians / Math.PI * 180 * 60 * 60;
  const declinationDegrees = Math.floor(declinationInArcSeconds / (60 * 60)) -
    90;
  const declinationMinutes = Math.floor(
    (declinationInArcSeconds - ((declinationDegrees + 90) * 60 * 60)) / 60,
  );
  const declinationSeconds = Math.floor(
    declinationInArcSeconds - ((declinationDegrees + 90) * 60 * 60) -
      (declinationMinutes * 60),
  );
  const declination: Declination = [
    declinationDegrees,
    declinationMinutes,
    declinationSeconds,
  ];
  return declination;
};

// const declinationArcSeconds2 = (declination[0] + 90) * 3600 +
// declination[1] * 60 + declination[2];

// (declination[0] + 90) * 3600 + declination[1] * 60 + declination[2] = declinationArcSeconds

export { convertRadiansToAscension, convertRadiansToDeclination };
