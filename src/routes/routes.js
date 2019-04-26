const newsRoutes = require("./dynamic/news");
const calendarRoutes = require("./dynamic/calendars");
const rankingRoutes = require("./dynamic/rankings");
const pageRoutes = require("./dynamic/pages");

module.exports = Object.assign(
  {},
  {
    "/": { page: "/" },
    "/nieuws/overzicht": { page: "/newsOverview" },
    "/commercieel/sponsors": { page: "/" }
  },
  newsRoutes,
  calendarRoutes,
  rankingRoutes,
  pageRoutes
);
