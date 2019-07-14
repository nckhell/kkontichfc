const newsRoutes = require("./dynamic/news");
const pageRoutes = require("./dynamic/pages");
const eventRoutes = require("./dynamic/events");
const gameReportsRoutes = require("./dynamic/gamereports");
const teamPagesRoutes = require("./dynamic/teams");

module.exports = Object.assign(
  {},
  {
    "/": { page: "/HomePage" },
    "/nieuws/overzicht": { page: "/NewsListPage" },
    "/evenementen": { page: "/EventsListPage" },
    "/commercieel/sponsors": { page: "/SponsorsPage" },
    "/jeugd/ploegen": { page: "/YouthTeamsPage" }
  },
  newsRoutes,
  pageRoutes,
  eventRoutes,
  gameReportsRoutes,
  teamPagesRoutes
);
