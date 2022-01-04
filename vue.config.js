const path = require('path')

const resolve  = dir => path.join(__dirname, dir)


const BASE_URL = process.env.NODE_ENV ==='procution' ? '/view-admin/' : '/'

module.exports = {
  lintOnSave: false,
  publicPath : BASE_URL ,    //项目的基本路径
  chainWebpack: config =>{
    config.resolve.alias
     .set('@', resolve('src'))
     .set('_c',resolve('src/components'))
  },
  //打包时不生生.map文件 （减少打包的体积）
  productionSourceMap : false ,
  devServer: {
    // Proxy : 'http://localhost:4000'
  }

}