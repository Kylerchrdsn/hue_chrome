const webpack = require('webpack')

var config = {
  entry: 'app.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['.js']
  },
  module: {
    rules: [
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
