const { join } = require("path");
const recursiveCopy = require("recursive-copy");
const withCSS = require("@zeit/next-css");
const routes = require("./src/routes/routes");

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

    return routes;
  }
});
