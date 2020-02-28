const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    writeToDisk: true,
  },
  configureWebpack: {
    output: {
      library: 'single-spa-auth-app',
      libraryTarget: 'umd',
      filename: 'single-spa-auth-app.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  },
  chainWebpack: (config) => {
    config.externals([
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/vue-fontawesome',
      'bootstrap',
      'bootstrap-vue',
      'single-spa-vue',
      'vue',
      'vue-router',
      'vue-toastr',
    ]);
  },
};
