const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");
const cssnano = require("cssnano");

// eslint-disable-next-line import/no-extraneous-dependencies
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./src/components/**/*.js", "./pages/*.js"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    postcssImport,
    tailwindcss("./tailwind.config.js"),
    autoprefixer(),
    ...(process.env.APP_ENV === "gh-pages" ? [purgecss] : []),
    ...(process.env.APP_ENV === "gh-pages"
      ? [cssnano({ preset: "default" })]
      : [])
  ]
};
