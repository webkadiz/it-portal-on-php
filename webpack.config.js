let webpack = require("webpack");

module.exports = {
  context: __dirname + "/src/",
  entry: "./js/index.js",
  output: {
    path: __dirname + "/build",
    filename: "build.js",
    publicPath: "/build/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.sass$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|svg|eot|ttf|woff|woff2)$/,
        loader: "file-loader?name=[path][name].[ext]"
      }
    ]
  },
  resolve: {
    extensions: [".sass", ".css", ".js"]
  },
  devServer: {
    overlay: true,
    watchContentBase: true
  },
  mode: "development",
  devtool: "eval"
};
