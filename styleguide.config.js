const path = require('path')
const fs = require('fs')
const { generateCSSReferences, generateJSReferences } = require('mini-html-webpack-plugin')

module.exports = {
  title: 'Accurat React Components',
  // inject the css and js generating functions into the html
  // https://react-styleguidist.js.org/docs/configuration.html#template
  template: ({ css, js, publicPath }) => {
    const rawHtml = fs.readFileSync('src/index.html', 'utf-8')
    const head = rawHtml.slice(0, rawHtml.indexOf('</head>'))
    const body = rawHtml.slice(rawHtml.indexOf('</head>'), rawHtml.indexOf('</body>'))
    const footer = rawHtml.slice(rawHtml.indexOf('</body>'))

    return `${head}${generateCSSReferences(css, publicPath)}${body}${generateJSReferences(js, publicPath)}${footer}`
  },
  mountPointId: 'root',
  require: ['tachyons', 'tachyons-extra', path.join(__dirname, 'src/style.css')],
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
  exampleMode: 'expand',
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
}
