const { join } = require("path");
const recursiveCopy = require("recursive-copy");
const withCSS = require("@zeit/next-css");
const calendarRoutes = require("./src/routes/calendars");
const rankingRoutes = require("./src/routes/rankings");

const ghPages = process.env.APP_ENV === "gh-pages";
const assetPrefix = ghPages ? "/kkontichfc/" : "";

module.exports = withCSS({
  assetPrefix,
  publicRuntimeConfig: {
    assetPrefix
  },
  async exportPathMap(defaultPathMap, { dev, dir, outDir }) {
    // If building for export
    if (!dev) {
      // copy everything in htdocs file to out dir
      await recursiveCopy(join(dir, "src/htdocs/"), outDir, { dot: true });
    }

    return Object.assign(
      {},
      {
        "/": { page: "/" }
      },
      calendarRoutes,
      rankingRoutes
    );
  }
});
