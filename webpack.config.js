module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "boundle.js"
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  }
};
