const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;

function relPath(name) {
  return path.resolve(__dirname, name);
}

module.exports = {
  context: relPath("src"),
  entry: "./js/main.js",
  mode: process.env.NODE_ENV,
  devtool: isDevelopment ? "source-map" : false,
  output: {
    filename: isDevelopment ? "[name].js" : "[name].[contenthash].js",
    path: relPath("build"),
  },
  devServer: {
    port: 3031,
    hot: true,
    compress: true,
    open: true,
    contentBase: relPath("src"),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: relPath("src/index.html"),
      filename: "index.html",
      minify: {
        collapseWhitespace: isProduction,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDevelopment,
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
