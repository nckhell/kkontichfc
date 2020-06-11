/* eslint-disable no-nested-ternary */
import _ from "lodash";

// eslint-disable-next-line import/prefer-default-export
export const getHeadSponsors = sponsorsList => {
  return _.filter(sponsorsList, sponsor => {
    return sponsor.headsponsor === "YES";
  });
};

export const getRandomSponsors = (arr, n) => {
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

export const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
