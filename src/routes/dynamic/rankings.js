const _ = require("lodash");
const kbvbApiUrls = require("../../imports/api/kbvb/graphql/api_endpoints");

function getRankingRoutes() {
  const rankingRoutes = {};
  const rankingPage = "/RankingPage";
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
