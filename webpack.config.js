//通过node获取到当前文件的位置
const path = require('path')
//导入刚引入的第三方插件html-webpack-plugin
const HtmlWebpackPplugin = require('html-webpack-plugin')
module.exports = {
    //设置当前入口文件
    entry: './src/index.js',
    //出口配置
    output: {
      //打包的文件名
      filename: 'bundle.js',
      //生成的文件位置
      path: path.resolve(__dirname, './dist')
    },
    mode: 'none',
    //webpack插件配置
    plugins: [
      //实例化html-webpack-plugin插件功能
      new HtmlWebpackPplugin({
        //html-webpack-plugin参数配置
        //指定打包HTML文件参照的模板HTML
        template: './src/index.html',
        //生成的html文件名称
        filename: 'app.html',
        //定义打包的js文件引入在新html的哪个标签里
        inject: 'head'
      })
    ]
}