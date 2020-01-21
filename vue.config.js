const path = require("path");
const webpack = require("webpack");

module.exports = {
  devServer: {
    writeToDisk: true
  },
  configureWebpack: {
    output: {
      library: "single-spa-auth-app",
      libraryTarget: "umd",
      filename: "single-spa-auth-app.js",
      path: path.resolve(__dirname, "dist")
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  }
};
