const _ = require("lodash");
const kbvbApiUrls = require("../../imports/api/kbvb/graphql/api_endpoints");

function getTeamsRoutes() {
  const teamsRoutes = {};
  const teamPage = "/TeamPage";

  _.each(kbvbApiUrls, (value, key) => {
    if (value.staticRoutingInfo) {
      teamsRoutes[value.staticRoutingInfo.url] = {
        page: teamPage,
        query: {
          teamID: key,
          fullUrl: value.staticRoutingInfo.url
        }
      };
    }
  });

  return teamsRoutes;
}

module.exports = getTeamsRoutes();
