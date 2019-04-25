export const sortNewsSummaryJsonOnDate = summaryJson => {
  return (
    summaryJson &&
    summaryJson.fileMap &&
    Object.keys(summaryJson.fileMap)
      .filter(file => {
        if (file.indexOf("content/nieuws") === 0) {
          return true;
        }
        return false;
      })
      .map(file => {
        return summaryJson.fileMap[file];
      })
      .sort((a, b) => {
        const aDate = Date.parse(a.date);
        const bDate = Date.parse(b.date);
        // eslint-disable-next-line no-nested-ternary
        return bDate > aDate ? 1 : bDate < aDate ? -1 : 0;
      })
  );
};

export const limit = (summaryJson, amountOfArticles) => {
  return amountOfArticles.slice(0, amountOfArticles - 1);
};

export const makeUrl = article => {
  return `${article.dir.split("content").join("")}/${article.base
    .split(".json")
    .join("")}`;
};
