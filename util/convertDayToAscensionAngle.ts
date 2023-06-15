const convertDayToAscensionAngle = (dayOfYear: number): number => {
  const ascensionAngle: number = ((dayOfYear - 1) / 365) * 2 * Math.PI;
  return ascensionAngle;
};

export default convertDayToAscensionAngle;
