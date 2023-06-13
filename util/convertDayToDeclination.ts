const dayDeclinationCoefficient = 180 * 60 * 60;

const convertDayToDeclination = (dayOfYear: number) => {
  const rawDeclination = (dayOfYear / 366) * dayDeclinationCoefficient;
  let treatedDeclination = rawDeclination / 180;
  //   check these for accuracy:
  const hours = Math.floor(treatedDeclination);
  treatedDeclination = (treatedDeclination - hours) * 100 / 60;
  const minutes = Math.floor(treatedDeclination);
  treatedDeclination = (treatedDeclination - minutes) * 100 / 60;
  const seconds = treatedDeclination.toPrecision(4);
  const declination = [hours, minutes, seconds];
  return declination;
};

export default convertDayToDeclination;
