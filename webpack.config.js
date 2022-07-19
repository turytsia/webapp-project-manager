const path = require("path");

module.exports = {
  entry: "./src/app.ts", //main file
  //output file info
  output: {
    //[contentHash] - hashes insides
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devtool: "inline-source-map",
  //how to work with the files
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: path.resolve(__dirname, "."),
    devMiddleware: {
      publicPath: "./dist",
    },
  },
};
