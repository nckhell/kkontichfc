/* eslint-disable no-nested-ternary */
import _ from "lodash";

// eslint-disable-next-line import/prefer-default-export
export const getHeadSponsors = sponsorsList => {
  return _.filter(sponsorsList, sponsor => {
    return sponsor.headsponsor === "YES";
  });
};
