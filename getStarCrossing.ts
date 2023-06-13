import { Coordinates } from "./types.ts";
import convertMonthAndDayToDayOfYear from "./util/convertMonthAndDayToDayOfYear.ts";
import convertDayToAscension from "./util/convertDayToAscension.ts";
import convertDayToDeclination from "./util/convertDayToDeclination.ts";

const getStarCrossing = (birthdays: string) => {
  const birthdaysArray = birthdays.split(",") as [string, string];
  const birthday1 = birthdaysArray[0].split(";") as [string, string];
  const birthday2 = birthdaysArray[1].split(";") as [string, string];
  const birthday1OfYear = convertMonthAndDayToDayOfYear(
    +birthday1[0],
    +birthday1[1],
  );
  const birthday2OfYear = convertMonthAndDayToDayOfYear(
    +birthday2[0],
    +birthday2[1],
  );
  const starCrossing: Coordinates = [
    convertDayToAscension(birthday1OfYear),
    convertDayToDeclination(birthday2OfYear),
  ];
  return starCrossing;
};

export default getStarCrossing;
