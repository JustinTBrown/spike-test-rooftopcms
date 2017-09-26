// const Records = require('spike-records')
// const Collections = require('spike-collections')
const Rooftop = require('spike-rooftop')
const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const locals = {}

module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.html', '**/_*', '**/.*', 'readme.md', 'yarn.lock', 'templates/*', 'posts/*', 'pages/*'],
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
    // new Records({
    //   addDataTo: locals,
    //   artists: { 
    //     url: 'http://165.227.42.179:8080/api/1.1/tables/artist/rows?access_token=92g3J2AynDXvoMkkUzVkCs9CeCXLPhrt',
    //     transform: (response) => { return response.data },
    //     template: {
    //       path: 'templates/artist.html',
    //       output: (artist) => { return `artists/${artist.slug}.html` }
    //     }
    //   },
    //   labels: { 
    //     url: 'http://165.227.42.179:8080/api/1.1/tables/label/rows?access_token=92g3J2AynDXvoMkkUzVkCs9CeCXLPhrt',
    //     transform: (response) => { return response.data },
    //     template: {
    //       path: 'templates/label.html',
    //       output: (label) => { return `labels/${label.slug}.html` }
    //     }
    //   }
    // }),
    // new Collections({
    //   addDataTo: locals,
    //   collections: {
    //     posts: {
    //       files: 'posts/**',
    //       markdownLayout: 'templates/post.html'
    //     }
    //   }
    // })
  ]
}
