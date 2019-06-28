/* eslint-disable no-nested-ternary */
import _ from "lodash";

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
