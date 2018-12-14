const path = require('path')
const { buildWebpackConfig } = require('webpack-preset-accurapp')
const { env, setOutput, customConfig } = require('@webpack-blocks/webpack')
const typescript = require('webpack-blocks-ts')

module.exports = buildWebpackConfig([
  env('production', [
    setOutput({
      path: path.resolve('./lib'),
      filename: 'react-components.js',
      libraryTarget: 'commonjs2',
    }),
  ]),
  typescript({ silent: true }),
  customConfig({
    externals: {
      // don't include react in the bundle
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    optimization: {
      // generate a single file
      splitChunks: false,
      // don't include every component if the user requires only one
      sideEffects: false,
    },
  }),
])
