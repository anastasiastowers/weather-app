var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', 'whatwg-fetch', './app/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  ***REMOVED***,
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' ***REMOVED***,
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]***REMOVED***
    ]
  ***REMOVED***,
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    historyApiFallback: true
  ***REMOVED***,
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    ***REMOVED***)
  ]
***REMOVED***;
