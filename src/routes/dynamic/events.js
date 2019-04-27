/* eslint-disable no-unused-expressions */
const SUMMARY = require("../../../content/evenementen/summary.json");

function getEventRoutes() {
  const events = {};
  const pageComponent = "/EventPage";

  SUMMARY.fileMap &&
    Object.keys(SUMMARY.fileMap).forEach(file => {
      // Handle pages
      const event = file
        .split("content")
        .join("")
        .split(".json")
        .join("");
      events[event] = {
        page: pageComponent,
        query: {
          fullUrl: event,
          path: file
        }
      };
    });

  return events;
}

module.exports = getEventRoutes();
