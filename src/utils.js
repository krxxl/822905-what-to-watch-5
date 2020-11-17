export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getTimeFromMins = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours + `ч. ` + minutes + `м.`;
};

export const getRatingNumtoWord = (val) => {
  if (val >= 0 && val < 3) {
    return `Bad`;
  } else if (val >= 3 && val < 5) {
    return `Normal`;
  } else if (val >= 5 && val < 8) {
    return `Good`;
  } else if (val >= 8 && val < 10) {
    return `Very good`;
  } else {
    return `Awesome`;
  }
};
