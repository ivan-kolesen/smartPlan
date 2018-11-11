module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "boundle.js"
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  }
};
