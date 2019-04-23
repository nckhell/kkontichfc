const { join } = require("path");
const recursiveCopy = require("recursive-copy");
const withCSS = require("@zeit/next-css");

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

    return {
      "/": { page: "/" },
      "/heren/1e-provinciale/kalender": {
        page: "/calendar",
        query: { teamID: "heren1eProv" }
      },
      "/heren/4e-provinciale/kalender": {
        page: "/calendar",
        query: { teamID: "heren4eProv" }
      }
    };
  }
});
