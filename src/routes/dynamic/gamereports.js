/* eslint-disable no-unused-expressions */
const SUMMARY = require("../../../content/build/wedstrijdverslagen/summary.json");

function getNewsRoutes() {
  const gameReports = {};
  const gameReportComponent = "/GameReportPage";

  SUMMARY.fileMap &&
    Object.keys(SUMMARY.fileMap).forEach(file => {
      // Handle pages
      const gameReport = file
        .split("content/build")
        .join("")
        .split(".json")
        .join("");
      gameReports[gameReport] = {
        page: gameReportComponent,
        query: {
          fullUrl: gameReport,
          path: file
        }
      };
    });

  return gameReports;
}

module.exports = getNewsRoutes();
