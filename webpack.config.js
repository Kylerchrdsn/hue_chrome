const webpack = require('webpack')

var config = {
  entry: 'app.jsx',
  output: {
    path: __dirname,
    filename: 'index.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          { loader: 'file-loader?name=public/fonts/[name].[ext]' }
        ]
      },
      {
        test: /\.jsx?/,
        include: __dirname,
        use: {
					loader: 'babel-loader'
				}
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader?importLoaders=1&camelCase&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]' },
          { loader: 'postcss-loader' }
        ]
      }
    ]
  }
};

module.exports = config;
