const path = require('path')
const webpack = require('webpack')
const fs = require('fs')

const projectRoot = path.resolve()

const nodeModules = {}
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`
  })


const config = {
  target: 'node',
  entry: [
    'babel-polyfill',
    './src/main.js'
  ],
  output: {
    libraryTarget: 'commonjs2',
    filename: 'index.js',
    path: projectRoot
  },
  resolve: { modules: [path.resolve(projectRoot, 'node_modules')] },
  externals: nodeModules,
  devtool: '#eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false
    })
  ]
}

module.exports = config
