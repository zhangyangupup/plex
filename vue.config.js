// const path = require('path')
module.exports = {
  // publicPath: '/',
  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'stylus',
  //     patterns: [
  //       path.resolve(__dirname, './src/style/common.styl')
  //     ]
  //   }
  // }
  css: {
    loaderOptions: {
      // 给 stylus-loader 传递选项
      stylus: {
        import: '~@/style/common.styl'
      }
    }
  }
}
