const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const data = require('./src/data/data.json');

module.exports = (env, options) => ({
  entry: ["./src/index.js"],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname + "/dist"),
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          options.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src']
          }
        }
      },
      {
        test: /img\.(jpe?g|png|gif|svg)$/i, 
        loader: "file-loader?name=/img/[name].[ext]"
      }
    ],
  },
  devServer: {
    contentBase: "./dist",
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({ filename: 'index.html', template: "./src/index.html" }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new GenerateJsonPlugin('data/data.json', data)
  ]
});
