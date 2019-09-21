const { join } = require("path");
const recursiveCopy = require("recursive-copy");
const withCSS = require("@zeit/next-css");
const routes = require("./src/routes/routes");

const ghPages = process.env.APP_ENV === "gh-pages";
const assetPrefix = ghPages ? "/kkontichfc/" : "";

module.exports = withCSS({
  assetPrefix,
  exportTrailingSlash: true,
  publicRuntimeConfig: {
    assetPrefix
  },
  async exportPathMap(defaultPathMap, { dev, dir, outDir }) {
    if (!dev) {
      await recursiveCopy(join(dir, "src/htdocs/"), outDir, { dot: true });
    }

    return routes;
  }
});
