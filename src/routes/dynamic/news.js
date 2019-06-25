/* eslint-disable no-unused-expressions */
const SUMMARY = require("../../../content/build/nieuws/summary.json");

function getNewsRoutes() {
  const news = {};
  const newsPostComponent = "/NewsPostPage";

  SUMMARY.fileMap &&
    Object.keys(SUMMARY.fileMap).forEach(file => {
      // Handle pages
      const newsPost = file
        .split("content/build")
        .join("")
        .split(".json")
        .join("");
      news[newsPost] = {
        page: newsPostComponent,
        query: {
          fullUrl: `${newsPost}/`,
          path: file
        }
      };
    });

  return news;
}

module.exports = getNewsRoutes();
