const path = require('path')
const fs = require('fs')
const { generateCSSReferences, generateJSReferences } = require('mini-html-webpack-plugin')

module.exports = {
  title: '/||||/| React Components',
  // inject the css and js generating functions into the html
  // https://react-styleguidist.js.org/docs/configuration.html#template
  template: ({ css, js, publicPath }) => {
    const rawHtml = fs.readFileSync('src/index.html', 'utf-8')
    const head = rawHtml.slice(0, rawHtml.indexOf('</head>'))
    const body = rawHtml.slice(rawHtml.indexOf('</head>'), rawHtml.indexOf('</body>'))
    const footer = rawHtml.slice(rawHtml.indexOf('</body>'))

    return `${head}${generateCSSReferences({
      files: css,
      publicPath,
    })}${body}${generateJSReferences({
      files: js,
      publicPath,
    })}${footer}`
  },
  mountPointId: 'root',
  require: ['tachyons', 'tachyons-extra', path.join(__dirname, 'src/style.css')],
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
  exampleMode: 'expand',
  styles: {
    ReactComponent: {
      root: {
        padding: '20px 0',
      },
    },
    SectionHeading: {
      toolbar: {
        display: 'none',
      },
    },
    Playground: {
      preview: {
        background: '#eee',
        borderColor: '#eee',
        marginBottom: '25px',
        fontFamily: '"Akkurat", sans-serif',
      },
    },
    Logo: {
      logo: {
        margin: '10px 0',
        padding: '0',
        lineHeight: '35px',
        border: 'none',
        fontFamily: '"Akkurat Mono", monospace',
        letterSpacing: '5px',
        textAlign: 'center',
        fontSize: '20px',
      },
    },
  },
  theme: {
    color: {
      base: '#eeeeee',
      baseBackground: '#1d2936',
      ribbonBackground: '#19F9D8',
      light: '#767676',
      lightest: '#eeeeee',
      link: '#eeeeee',
      linkHover: '#19F9D8',
      focus: '#19F9D8',
      border: '#131c25',
      error: '#FF2C6D',
      sidebarBackground: '#131c25',
      codeBase: '#eeeeee',
      codeComment: '#676B79',
      codePunctuation: '#eeeeee',
      codeProperty: '#6DB1FF',
      codeString: '#f96819',
      codeOperator: '#eeeeee',
      codeKeyword: '#19F9D8',
      codeFunction: '#6DB1FF',
      codeVariable: '#eeeeee',
      codeBackground: '#131c25',
    },
    fontFamily: {
      base: '"Akkurat", sans-serif',
      monospace: '"Akkurat Mono", monospace',
    },
  },
  styleguideDir: 'docs',
}
