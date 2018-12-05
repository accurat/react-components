const path = require('path')
const { buildWebpackConfig } = require('webpack-preset-accurapp')
const { entryPoint, env, setOutput, customConfig } = require('@webpack-blocks/webpack')
const typescript = require('webpack-blocks-ts')

module.exports = buildWebpackConfig([
  entryPoint('./src/index.ts'),
  env('production', [
    setOutput({
      path: path.resolve('./lib'),
      filename: 'react-components.js',
      libraryTarget: 'commonjs-module',
    }),
  ]),
  typescript({ silent: true }),
  customConfig({
    externals: {
      // don't include react in the bundle
      react: 'react',
    },
    optimization: {
      // generate a single file
      splitChunks: false,
      // don't include every component if the user requires only one
      sideEffects: false,
    },
  }),
])
