const newsRoutes = require("./dynamic/news");
const calendarRoutes = require("./dynamic/calendars");
const rankingRoutes = require("./dynamic/rankings");
const pageRoutes = require("./dynamic/pages");
const eventRoutes = require("./dynamic/events");
const gameReportsRoutes = require("./dynamic/gamereports");
const teamPagesRoutes = require("./dynamic/teams");

module.exports = Object.assign(
  {},
  {
    "/": { page: "/HomePage" },
    "/nieuws/overzicht": { page: "/NewsListPage" },
    "/commercieel/evenementen": { page: "/EventsListPage" },
    "/commercieel/sponsors": { page: "/SponsorsPage" }
  },
  newsRoutes,
  calendarRoutes,
  rankingRoutes,
  pageRoutes,
  eventRoutes,
  gameReportsRoutes,
  teamPagesRoutes
);
