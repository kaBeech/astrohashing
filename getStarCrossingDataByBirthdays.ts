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

const getInfoURL = (star: Star) => {
//     const infoURL = 
// }

  export async function getStarCrossingDataByBirthdays(birthdays: string): Promise<StarCrossingData> {
    // Convert birthdays to coordinates
    const starCrossing: Coordinates = getStarCrossing(birthdays);
    // Find the closest star to those coordinates
    const closestStar: Star = getClosestStar(starCrossing);
    // Construct URLs
    const infoURL = getInfoURL(closestStar);
    const skyMapURL = getSkyMapURL(starCrossing);
    const starCrossingData = birthdays + birthdays as unknown as StarCrossingData
    return starCrossingData as StarCrossingData;
  }
  
