/* eslint-disable no-unused-expressions */
const SUMMARY = require("../../../content/nieuws/build/summary.json");

function getNewsRoutes() {
  const news = {};
  const newsPostComponent = "/newspost";

  SUMMARY.fileMap &&
    Object.keys(SUMMARY.fileMap).forEach(file => {
      // Handle pages
      const newsPost = file
        .split("content/nieuws/build/")
        .join("/nieuws/")
        .split(".json")
        .join("");
      news[newsPost] = {
        page: newsPostComponent,
        query: {
          fullUrl: newsPost,
          path: file
        }
      };
    });

  return news;
}

module.exports = getNewsRoutes();
