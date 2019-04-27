/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
export const sortEventsSummaryJsonOnDate = (summaryJson, order = "desc") => {
  return (
    summaryJson &&
    summaryJson.fileMap &&
    Object.keys(summaryJson.fileMap)
      .filter(file => {
        if (file.indexOf("content/evenementen") === 0) {
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

        if (order === "asc") {
          return bDate < aDate ? 1 : bDate > aDate ? -1 : 0;
        }
        return bDate > aDate ? 1 : bDate < aDate ? -1 : 0;
      })
  );
};

export const makeUrl = event => {
  return `${event.dir.split("content").join("")}/${event.base
    .split(".json")
    .join("/")}`;
};
