const convertDayToDeclinationAngle = (dayOfYear: number): number => {
  const declinationAngle: number = ((dayOfYear - 1) / 365) * Math.PI;
  return declinationAngle;
};

export default convertDayToDeclinationAngle;
