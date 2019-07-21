/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */

export const sortSliderSummaryJsonOnDate = (summaryJson, order = "desc") => {
  return (
    summaryJson &&
    Object.keys(summaryJson)
      .map(file => {
        return summaryJson[file];
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
