const path = require("path");
const webpack = require("webpack");

module.exports = {
  devServer: {
    writeToDisk: true
  },
  configureWebpack: {
    output: {
      library: "single-spa-login-app",
      libraryTarget: "umd",
      filename: "single-spa-login-app.js",
      path: path.resolve(__dirname, "dist")
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  }
};
