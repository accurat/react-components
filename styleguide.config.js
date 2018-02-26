const path = require('path')

module.exports = {
  title: 'Accurat React Components',
  template: 'src/index.html',
  showCode: true,
  editorConfig: {
    theme: 'oceanic-next',
  },
  theme: {
    color: {},
    fontFamily: {
      base: '"Roboto"',
      monospace: '"Roboto Mono", monospace',
    },
  },
  styleguideDir: 'docs',
  require: ['tachyons', 'tachyons-plugin-accurat', path.join(__dirname, 'src/style.css')],
}
