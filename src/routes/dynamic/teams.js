const _ = require("lodash");
const kbvbApiUrls = require("../../config/api/kbvb_graphql");

function getTeamsRoutes() {
  const teamsRoutes = {};
  const teamPage = "/TeamPage";

  _.each(kbvbApiUrls, (value, key) => {
    if (value.staticRoutingInfo) {
      teamsRoutes[value.staticRoutingInfo.url] = {
        page: teamPage,
        query: {
          teamID: key
        }
      };
    }
  });

  return teamsRoutes;
}

module.exports = getTeamsRoutes();
