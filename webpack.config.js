const path = require('path')
const buildWebpackConfig = require('webpack-preset-accurapp')
const { NamedModulesPlugin } = require('webpack')
const { setOutput, addPlugins, customConfig } = require('webpack-blocks')
const npmModulesExternals = require('webpack-node-externals')

function setExternals(externals) {
  return customConfig({ externals })
}

const appConfig = buildWebpackConfig()

const libConfig = buildWebpackConfig([
  setOutput({
    ...appConfig.output,
    path: path.resolve('./lib'),
    filename: 'react-components.js',
    libraryTarget: 'commonjs2',
  }),
  setExternals([npmModulesExternals()]),
  addPlugins([new NamedModulesPlugin()]),
])

module.exports = libConfig
