const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {//入口
        index: './src/index.js',
        login: './src/login.js',
    },
    output: { // 出口
        filename: "[name].js",
        path: path.resolve('dist')
    },
    module: {  // 处理对应模块

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // // 在src目录下创建一个index.html页面当做模板来用
            filename: "index.html",
            hash: true,// 会在打包好的bundle.js后面加上hash串
            chunks: ['index']// 对应js文件
        }),
        new HtmlWebpackPlugin({
            template: "./src/login.html", // // 在src目录下创建一个index.html页面当做模板来用
            filename: "login.html",
            hash: true,//// 会在打包好的bundle.js后面加上hash串
            chunks: ['login']
        })
    ],  // 插件配置
    devServer: {   // 开发服务器配置

    },
    mode: "development"   // 模式配置
}
