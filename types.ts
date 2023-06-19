type Ascension = [number, number, number];

type Declination = [number, number, number];

type Coordinates = [Ascension, Declination];

interface Star {
  coordinates: Coordinates;
  name: string;
  altName: string | null;
  commonName: string | null;
  infoURL: string | null;
  isdbURL: string | null;
  universeGuideURL: string | null;
}

interface StarCrossingData {
  coordinates: Coordinates;
  infoURL: string;
  skyMapURL: string;
  staticPhotoURL: string;
  closestStarName: string;
  closestStarCommonName: string;
}

export type { Ascension, Coordinates, Declination, Star, StarCrossingData };
