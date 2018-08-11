const express = require('express')
const app = express()

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackHotMiddleware = require('webpack-hot-middleware')

app.use(webpackHotMiddleware(complier, {
  heartbeat: 2000
}))

const webpackConfig = {
  entry: [
    path.join(__dirname, '..', '/src/index.js')
  ],
  output: {
    path: path.join(__dirname, '..', '/dist'),
    publicPath: path.join(__dirname, '..', '/dist'),
    filename: '[name]-[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '..', '/index.html'),
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

const complier = webpack(webpackConfig)

const webpackDevMiddleware = require('webpack-dev-middleware')
app.use(webpackDevMiddleware(complier, {
  publicPath: webpackConfig.output.publicPath
}))

app.get('*', (req, res, next) => {
  const filename = path.join(path.join(__dirname, '..', '/dist'), 'index.html')

  complier.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return (next(err))
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
})

app.listen(3000, function () {
  console.log('> Starting dev server...')
})