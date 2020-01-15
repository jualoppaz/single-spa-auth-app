module.exports = {
  devServer: {
    writeToDisk: true
  },
  configureWebpack: {
    output: {
      libraryExport: "default"
    }
  }
};
