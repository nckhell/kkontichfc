/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */

export const getAllTeamWithGameReports = SUMMARY => {
  const teams = [];

  SUMMARY.fileMap &&
    Object.keys(SUMMARY.fileMap).forEach(file => {
      // Handle pages
      const team = file.split("/").slice(-2)[0];

      if (teams.indexOf(team) === -1) {
        teams.push(team);
      }
    });

  return teams;
};

export const getAllSeasonsWithGameReports = SUMMARY => {
  const seasons = [];

  SUMMARY.fileMap &&
    Object.keys(SUMMARY.fileMap).forEach(file => {
      const season = file.split("/").slice(-4)[0];

      if (seasons.indexOf(season) === -1) {
        seasons.push(season);
      }
    });

  return seasons.sort().reverse();
};

export const getSeasonFromGameReport = gameReportDir => {
  return gameReportDir.split("/").slice(-3)[0];
};

export const sortGameReportsSummaryJsonOnDate = (
  summaryJson,
  order = "desc"
) => {
  return (
    summaryJson &&
    summaryJson.fileMap &&
    Object.keys(summaryJson.fileMap)
      .map(file => {
        return summaryJson.fileMap[file];
      })
      .sort((a, b) => {
        const aDate = Date.parse(a.date);
        const bDate = Date.parse(b.date);

        if (order === "asc") {
          return bDate < aDate ? 1 : bDate > aDate ? -1 : 0;
        }
        return bDate > aDate ? 1 : bDate < aDate ? -1 : 0;
      })
  );
};

export const limit = (summaryJson, amountOfReports) => {
  return summaryJson.slice(0, amountOfReports);
};

export const makeUrl = report => {
  return `/${report.dir
    .split("content/build/wedstrijdverslagen/")
    .join("wedstrijdverslagen/")}/${report.base.split(".json").join("/")}`;
};
