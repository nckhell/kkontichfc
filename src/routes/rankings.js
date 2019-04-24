const _ = require("lodash");
const kbvbApiUrls = require("../config/api/kbvb_graphql");

function getRankingRoutes() {
  const rankingRoutes = {};
  const rankingPage = "/ranking";
  const rankingUrlAppendix = "/klassement";

  _.each(kbvbApiUrls, (value, key) => {
    if (value.staticRoutingInfo) {
      rankingRoutes[value.staticRoutingInfo.url + rankingUrlAppendix] = {
        page: rankingPage,
        query: {
          teamID: key
        }
      };
    }
  });

  return rankingRoutes;
}

module.exports = getRankingRoutes();
