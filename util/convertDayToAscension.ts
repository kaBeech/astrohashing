const dayAscensionCoefficient = 24 * 60 * 60;

const convertDayToAscension = (dayOfYear: number) => {
  const rawAscension = (dayOfYear / 366) * dayAscensionCoefficient;
  let treatedAscension = rawAscension / 24;
  //   check these for accuracy:
  const hours = Math.floor(treatedAscension);
  treatedAscension = (treatedAscension - hours) * 100 / 60;
  const minutes = Math.floor(treatedAscension);
  treatedAscension = (treatedAscension - minutes) * 100 / 60;
  const seconds = treatedAscension.toPrecision(4);
  const ascension = [hours, minutes, seconds];
  return ascension;
};

export default convertDayToAscension;
