/* eslint-disable no-nested-ternary */
import _ from "lodash";

export const sortSponsors = sponsorsList => {
  return sponsorsList.sort((a, b) => {
    return a > b ? 1 : b < a ? -1 : 0;
  });
};

export const getHeadSponsors = sponsorsList => {
  return _.filter(sponsorsList, sponsor => {
    return sponsor.headsponsor === "YES";
  });
};

export const getHighlitedSponsors = sponsorsList => {
  return _.filter(sponsorsList, sponsor => {
    return sponsor.highlight === "YES";
  });
};
