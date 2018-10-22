const path = require('path')

module.exports = {
  title: 'Accurat React Components',
  template: 'src/index.html',
  showCode: true,
  editorConfig: {
    theme: 'dracula',
  },
  theme: {
    color: {},
    fontFamily: {
      base: '"Roboto"',
      monospace: '"Roboto Mono", monospace',
    },
  },
  styleguideDir: 'docs',
  require: ['tachyons', 'tachyons-extra', path.join(__dirname, 'src/style.css')],
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
  webpackConfig: require('react-scripts-ts/config/webpack.config.dev'),
}
