const _ = require("lodash");
const kbvbApiUrls = require("../../imports/api/kbvb/graphql/api_endpoints");

function getCalendarRoutes() {
  const calendarRoutes = {};
  const calendarPage = "/CalendarPage";
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
