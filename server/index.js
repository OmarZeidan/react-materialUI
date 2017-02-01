const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../webpack.dev.config')
const path = require('path')
const port = 3000

const app = express()
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: false,
  stats: {color: true}
}))
app.use(webpackHotMiddleware(compiler))


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log(`Listening on poty ${port}`)
  }
})
