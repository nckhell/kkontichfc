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
    "/wedstrijdverslagen": { page: "/GameReportsListPage" },
    "/commercieel/sponsors": { page: "/SponsorsPage" },
    "/info/bestuur": { page: "/BoardPage" },
    "/jeugd/trainers": { page: "/YouthTrainersPage" },
    "/jeugd/ploegen": { page: "/YouthTeamsPage" },
    "/jeugd/online-registratie": { page: "/OnlineRegistrationPage" },
    "/info/contact": { page: "/ContactPage" },
    "/jeugd/paastornooi/online-registratie": {
      page: "/PaastornooiRegistrationPage"
    }
  },
  newsRoutes,
  pageRoutes,
  eventRoutes,
  gameReportsRoutes,
  teamPagesRoutes
);
