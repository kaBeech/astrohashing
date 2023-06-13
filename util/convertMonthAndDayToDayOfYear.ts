const convertMonthAndDayToDayOfYear = (month: number, day: number): number => {
  let dayOfYear = 0;
  switch (month) {
    case 1:
      break;
    case 2:
      dayOfYear += 31;
      break;
    case 3:
      dayOfYear += 60;
      break;
    case 4:
      dayOfYear += 91;
      break;
    case 5:
      dayOfYear += 121;
      break;
    case 6:
      dayOfYear += 152;
      break;
    case 7:
      dayOfYear += 182;
      break;
    case 8:
      dayOfYear += 213;
      break;
    case 9:
      dayOfYear += 244;
      break;
    case 10:
      dayOfYear += 274;
      break;
    case 11:
      dayOfYear += 305;
      break;
    case 12:
      dayOfYear += 335;
      break;
    default:
      throw new Error(
        "Invalid month - please input a number between 1 and 12",
      );
  }
  if (day < 1 || day > 31) {
    throw new Error("Invalid day - please input a number between 1 and 31");
  }
  dayOfYear += day;
  return dayOfYear;
};

export default convertMonthAndDayToDayOfYear;
