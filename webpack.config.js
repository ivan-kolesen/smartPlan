const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "boundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|ttf)$/,
        loader: "url-loader"
      }
    ]
  },

  optimization: {
    minimizer: [new UglifyJsPlugin({
      test: /\.js$/i,
    })]
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  }
};
