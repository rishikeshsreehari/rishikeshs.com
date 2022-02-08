
const pluginSEO = require("eleventy-plugin-seo");

module.exports =  function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"));
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");

  

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
