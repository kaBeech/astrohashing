import { getAllStars } from "./db";
import { Coordinates, Star, StarCrossingData } from "./types";
import convertMonthAndDayToDayOfYear from "./util/convertMonthAndDayToDayOfYear";
import convertDayToAscension from "./util/convertDayToAscension";
import convertDayToDeclination from "./util/convertDayToDeclination";
import getDistanceBetweenCoordinates from "./util/getDistanceBetweenCoordinates"

const stars: Star[] = await getAllStars()

const getStarCrossing = (birthdays: string) => {
    const birthdaysArray = birthdays.split(",") as [string, string];
    const birthday1 = birthdaysArray[0].split("/") as [string, string];
    const birthday2 = birthdaysArray[1].split("/") as [string, string];
    const birthday1OfYear = convertMonthAndDayToDayOfYear(+birthday1[0], +birthday1[1])
    const birthday2OfYear = convertMonthAndDayToDayOfYear(+birthday2[0], +birthday2[1])
    const starCrossing: Coordinates = [convertDayToAscension(birthday1OfYear), convertDayToDeclination(birthday2OfYear)]
    return starCrossing
}

const getClosestStar = (starCrossing) => {
    let closestDistance: number | null = null;
    let closestStar: Star | null = null;
    for (const star of stars) {
        if ((closestDistance === null) || (getDistanceBetweenCoordinates(star.coordinates, starCrossing) < closestDistance) ) {
            closestStar = star
        }
    }
    if (closestStar === null) {
        throw new Error("No stars found");
        
    }
    return closestStar
}

const getInfoURL = (star: Star): string => {
    const starName = star.name.split(" ")
    const infoURL = `http://www.stellar-database.com/Scripts/search_star.exe?Catalog=${starName[0]}&CatNo=${starName[1]}`
    return infoURL
}

const getSkyMapURL = (starCrossing: Coordinates): string => {
    // Check this for accuracy. Commented out working URL example
    // const skyMapURL = `http://www.wikisky.org/?ra=6.3991971944444&de=-52.695660555556&zoom=3&show_grid=1&show_constellation_lines=1&show_constellation_boundaries=1&show_const_names=1&show_galaxies=1&img_source=IMG_all`
    const skyMapURL = `http://www.wikisky.org/?ra=${starCrossing[0]}&de=${starCrossing[1]}=3&show_grid=1&show_constellation_lines=1&show_constellation_boundaries=1&show_const_names=1&show_galaxies=1&img_source=IMG_all}`
    return skyMapURL
}

  export async function getStarCrossingDataByBirthdays(birthdays: string): Promise<StarCrossingData> {
    // Convert birthdays to coordinates
    const starCrossing: Coordinates = getStarCrossing(birthdays);
    // Find the closest star to those coordinates
    const closestStar: Star = getClosestStar(starCrossing);
    // Construct URLs
    const infoURL = getInfoURL(closestStar);
    const skyMapURL = (starCrossing);
    const starCrossingData = birthdays + birthdays as unknown as StarCrossingData
    return starCrossingData as StarCrossingData;
  }
  
