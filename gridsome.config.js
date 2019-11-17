// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const theme = require("./src/data/theme.json");

const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        // path.resolve(__dirname, './src/assets/sass/_globals.sass'),
        // or if you use scss
        //path.resolve(__dirname, './src/assets/sass/_globals.scss'),
        // you can also use a glob if you'd prefer
        //path.resolve(__dirname, './src/assets/sass/*.sass'),
        // or scss
        path.resolve(__dirname, "./src/assets/sass/*.scss")
      ]
    });
}

module.exports = {
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({
        /* ... */
      });
  },
  siteName: theme.site_name,
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Project",
        path: "projects/**/*.md",
        route: "/:slug"
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      plugins: []
    }
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080
  }
};
