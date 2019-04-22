const fs = require("fs");
const { join } = require("path");
const { promisify } = require("util");
const withCSS = require("@zeit/next-css");

const copyFile = promisify(fs.copyFile);

const ghPages = process.env.APP_ENV === "gh-pages";
const assetPrefix = ghPages ? "/kkontichfc/" : "";

module.exports = withCSS({
  assetPrefix,
  publicRuntimeConfig: {
    assetPrefix
  },
  async exportPathMap(defaultPathMap, { dev, dir, outDir }) {
    if (!dev) {
      await copyFile(
        join(dir, "htdocs", ".nojekyll"),
        join(outDir, ".nojekyll")
      );
      await copyFile(join(dir, "htdocs", "CNAME"), join(outDir, "CNAME"));
      await copyFile(
        join(dir, "htdocs", "robots.txt"),
        join(outDir, "robots.txt")
      );
    }

    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/heren/1e-provinciale/kalender": {
        page: "/calendar",
        query: { team: "heren1eProv" }
      },
      "/heren/4e-provinciale/kalender": {
        page: "/calendar",
        query: { team: "heren4eProv" }
      }
    };
  }
});
