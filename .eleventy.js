module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("docs/assets/");
  eleventyConfig.addPassthroughCopy("docs/css/");

  eleventyConfig.addWatchTarget("docs/css/");

  return {
    dir: {
      input: "docs",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
