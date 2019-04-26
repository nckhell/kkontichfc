/* eslint-disable no-unused-expressions */
const SUMMARY = require("../../../content/pages/summary.json");

function getPagesRoutes() {
  const pages = {};
  const pageComponent = "/page";

  SUMMARY.fileMap &&
    Object.keys(SUMMARY.fileMap).forEach(file => {
      // Handle pages
      const page = file
        .split("content/pages")
        .join("")
        .split(".json")
        .join("");
      pages[page] = {
        page: pageComponent,
        query: {
          fullUrl: page,
          path: file
        }
      };
    });

  return pages;
}

module.exports = getPagesRoutes();
