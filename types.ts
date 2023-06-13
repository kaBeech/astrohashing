type Ascension = [number, number, number];

type Declination = [number, number, number];

type Coordinates = [Ascension, Declination];

interface Star {
    coordinates: Coordinates,
    name: string,
    commonName: string | null
}

interface StarCrossingData {
    coordinates: Coordinates,
    infoURL: string,
    skyMapURL: string
}

export type { Ascension, Coordinates, Declination, StarCrossingData, Star };
