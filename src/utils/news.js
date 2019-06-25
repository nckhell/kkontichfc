/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */

export const getAllNewsCategories = SUMMARY => {
  const newsCategories = [];

  SUMMARY.fileMap &&
    Object.keys(SUMMARY.fileMap).forEach(file => {
      // Handle pages
      const newsCategory = file.split("/").slice(-2)[0];

      if (newsCategories.indexOf(newsCategory) === -1) {
        newsCategories.push(newsCategory);
      }
    });

  return newsCategories;
};

export const getAllSeasonsWithNews = SUMMARY => {
  const seasons = [];

  SUMMARY.fileMap &&
    Object.keys(SUMMARY.fileMap).forEach(file => {
      const season = file.split("/").slice(-3)[0];

      if (seasons.indexOf(season) === -1) {
        seasons.push(season);
      }
    });

  return seasons.sort().reverse();
};

export const getCategoryFromNewsPost = newsPostDir => {
  return newsPostDir.split("/").slice(-1)[0];
};

export const getSeasonFromNewsPost = newsPostDir => {
  return newsPostDir.split("/").slice(-2)[0];
};

export const sortNewsSummaryJsonOnDate = (summaryJson, order = "desc") => {
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

export const limit = (summaryJson, amountOfArticles) => {
  return summaryJson.slice(0, amountOfArticles);
};

export const makeUrl = article => {
  return `/${article.dir
    .split("content/build/nieuws/")
    .join("nieuws/")}/${article.base.split(".json").join("/")}`;
};
