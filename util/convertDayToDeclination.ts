import { Declination } from "./types";

const dayDeclinationCoefficient = 180 * 60 * 60;

const convertDayToDeclination = (
  dayOfYear: number,
): Declination => {
  const rawDeclination: number = (dayOfYear / 366) * dayDeclinationCoefficient;
  let treatedDeclination = rawDeclination / 180;
  //   check these for accuracy:
  const hours: number = Math.floor(treatedDeclination);
  treatedDeclination = (treatedDeclination - hours) * 100 / 60;
  const minutes: number = Math.floor(treatedDeclination);
  treatedDeclination = ((treatedDeclination - minutes) * 100 / 60) - 90;
  const seconds: number = Math.floor(treatedDeclination);
  const declination: Declination = [hours, minutes, seconds];
  return declination;
};

export default convertDayToDeclination;
