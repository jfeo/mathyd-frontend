const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
      rules: [
          {
              test: /\.vue$/,
              loader: 'vue-loader'
          },
          { 
              test: /\.js$/,
              loader: 'babel-loader'
          },
          {
              test: /\.css$/,
              use: [
                  'vue-style-loader',
                  'style-loader',
                  'css-loader'
              ]
          }
      ]
  },
  devtool: 'source-map',
  devServer: {
      contentBase: './dist'
  },
  plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
          title: 'Mathyd Development',
          template: 'src/index.html'
      })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  }
};