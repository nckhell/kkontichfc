const _ = require("lodash");
const kbvbApiUrls = require("../config/api/kbvb_graphql");

function getCalendarRoutes() {
  const calendarRoutes = {};
  const calendarPage = "/calendar";
  const calenderUrlAppendix = "/kalender";

  _.each(kbvbApiUrls, (value, key) => {
    if (value.staticRoutingInfo) {
      calendarRoutes[value.staticRoutingInfo.url + calenderUrlAppendix] = {
        page: calendarPage,
        query: {
          teamID: key
        }
      };
    }
  });

  return calendarRoutes;
}

module.exports = getCalendarRoutes();
