const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-hot-middleware/client', // This is removes the auto reload!
    './src/index.js'
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'prod'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, './prod'),
    compress: true
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'},
      {test: /\.scss$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
