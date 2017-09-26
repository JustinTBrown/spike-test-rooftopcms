const Rooftop = require('spike-rooftop')
const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const locals = {}

module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.html', '**/_*', '**/.*', 'readme.md', 'yarn.lock', 'templates/*'],
  reshape: htmlStandards({
    locals: () => locals
  }),
  postcss: cssStandards(),
  babel: jsStandards(),
  plugins: [
    new Rooftop({ 
      addDataTo: locals, 
      url: 'https://trigger.rooftopcms.io', 
      apiToken: 'e3ad97c6f964f827c8f43e8cdc380936',
      contentTypes: [
        {
          name: 'posts',
          template: {
            path: 'templates/post.html',
            output: (post) => { return `posts/${post.slug}.html` }
          }
        },
        {
          name: 'pages',
          template: {
            path: 'templates/page.html',
            output: (page) => { return `${page.slug}.html` }
          }
        }
      ]
    })
  ]
}
