const getInfoURL = (starName: string): string => {
  const starNameSplit = starName.split(" ");
  const infoURL =
    `http://www.stellar-database.com/Scripts/search_star.exe?Catalog=${
      starNameSplit[0]
    }&CatNo=${starNameSplit[1]}`;
  return infoURL;
};

export default getInfoURL;
