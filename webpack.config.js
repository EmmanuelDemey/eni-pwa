const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");

module.exports = {
  entry: "./script.js",
  mode: process.env.NODE_ENV !== "production" ? "production" : "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CopyPlugin([
      { from: "images", to: "images" },
      { from: "_headers", to: "./" },
      { from: "manifest.webmanifest", to: "./" },
    ]),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, "./sw.js"),
    }),
  ],
  devServer: {
    contentBase: "./dist",
  },
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
};
