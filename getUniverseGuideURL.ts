const getUniverseGuideURL = (starName: string): string => {
  const starNameSplit = starName.split(" ");
  const universeGuideURL =
    `https://duckduckgo.com/?q=!ducky+site%3Awww.universeguide.com+star+${
      starNameSplit[0]
    }+${starNameSplit[1]}`;
  return universeGuideURL;
};

export default getUniverseGuideURL;
