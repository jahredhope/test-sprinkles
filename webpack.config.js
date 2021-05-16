const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/i,
        loader: "babel-loader",
      },
      {
        test: /.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new VanillaExtractPlugin(), new MiniCssExtractPlugin()],
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
};
