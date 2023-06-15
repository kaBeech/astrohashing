const convertRadiansToURLFriendlyAscension = (radians: number): number => {
  const urlFriendlyAscension = radians / (2 * Math.PI) * 24;
  return urlFriendlyAscension;
};
const convertRadiansToURLFriendlyDeclination = (
  radians: number,
): number => {
  const urlFriendlyDeclination = (radians / Math.PI * 180) -
    90;

  return urlFriendlyDeclination;
};

export {
  convertRadiansToURLFriendlyAscension,
  convertRadiansToURLFriendlyDeclination,
};
