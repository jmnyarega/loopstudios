module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["css", "svg", "md", "jpg", "njk", "png"]);
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
