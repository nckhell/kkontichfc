/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
export const sortEventsSummaryJsonOnDate = (summaryJson, order = "desc") => {
  return (
    summaryJson &&
    summaryJson.fileMap &&
    Object.keys(summaryJson.fileMap)
      .map(event => {
        return summaryJson.fileMap[event];
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

export const getAllSeasonsWithEvents = SUMMARY => {
  const seasons = [];

  SUMMARY.fileMap &&
    Object.keys(SUMMARY.fileMap).forEach(file => {
      const season = file.split("/").slice(-2)[0];

      if (seasons.indexOf(season) === -1) {
        seasons.push(season);
      }
    });

  return seasons.sort().reverse();
};

export const getSeasonFromEvent = EventDir => {
  return EventDir.split("/").slice(-1)[0];
};

export const sortEventsOnOnlyEventsInTheFuture = arrayWithEventObjects => {
  const currentDate = new Date();

  return arrayWithEventObjects.filter(event => {
    const eventDate = Date.parse(event.date);
    return currentDate < eventDate;
  });
};

export const getDayFromDate = (dateString: string): string => {
  const options = {
    day: "numeric"
  };

  return new Date(dateString).toLocaleDateString("nl-NL", options);
};

export const getMonthFromDate = (dateString: string): string => {
  const options = {
    month: "short"
  };

  return new Date(dateString).toLocaleDateString("nl-NL", options);
};

export const limit = (arrayWithEventObjects, amountOfArticles) => {
  return arrayWithEventObjects.slice(0, amountOfArticles);
};

export const makeUrl = event => {
  return `${event.dir.split("content/build").join("")}/${event.base
    .split(".json")
    .join("/")}`;
};
