type Ascension = [number, number, number];

type Declination = [number, number, number];

type Coordinates = [Ascension, Declination];

interface Star {
  coordinates: Coordinates;
  name: string;
  altName: string | null;
  commonName: string | null;
}

interface StarCrossingData {
  coordinates: Coordinates;
  infoURL: string;
  skyMapURL: string;
  closestStarCommonName: string;
}

export type { Ascension, Coordinates, Declination, Star, StarCrossingData };
