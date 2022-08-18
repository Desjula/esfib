module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    // Zkopírovat css/ to _site/css/
    eleventyConfig.addPassthroughCopy("css/");
    eleventyConfig.addPassthroughCopy("script.js");

    return {
      // možné formáty šablon
      templateFormats: ["njk", "html", "md"],
      // jako šablonovací jazyk zvolíme Nunjucks`
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
    }
};
  