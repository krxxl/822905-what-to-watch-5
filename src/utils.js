import {Rating} from './constant/constant';

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getTimeFromMins = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours + `ч. ` + minutes + `м.`;
};

export const getRatingNumToWord = (val) => {
  if (val >= 0 && val < 3) {
    return Rating.BAD;
  } else if (val >= 3 && val < 5) {
    return Rating.NORMAL;
  } else if (val >= 5 && val < 8) {
    return Rating.GOOD;
  } else if (val >= 8 && val < 10) {
    return Rating.VERYGOOD;
  } else {
    return Rating.AWESOME;
  }
};

export const convertNumToWord = (date) => {
  let month;
  switch (date) {
    case 1:
      month = `January`;
      break;
    case 2:
      month = `February`;
      break;
    case 3:
      month = `March`;
      break;
    case 4:
      month = `April`;
      break;
    case 5:
      month = `May`;
      break;
    case 6:
      month = `June`;
      break;
    case 7:
      month = `July`;
      break;
    case 8:
      month = `August`;
      break;
    case 9:
      month = `September`;
      break;
    case 10:
      month = `October`;
      break;
    case 11:
      month = `November`;
      break;
    case 12:
      month = `December`;
      break;
  }
  return month;
};
