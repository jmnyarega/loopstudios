module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["css", "svg", "md", "jpg", "njk"]);
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
