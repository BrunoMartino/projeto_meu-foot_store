const path = require("path");

module.exports = {
  entry: "./js/script.js",
  output: {
    path: path.resolve(__dirname, "main/"),
    filename: "main.js",
  },
  modules: {
    rules: {
      exclude: /node_modules/,
    },
  },
};
