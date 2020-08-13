const path = require("path");

module.exports = {
  mode: "production",

  entry: ["@babel/polyfill", "./src/index.js"],

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
};
