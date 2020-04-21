const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {//入口
        index: './src/js/index.js'
    },
    output: { // 出口
        filename: "[name].js",
        path: path.resolve('dist')
    },
    module: {  // 处理对应模块
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: 'css-loader',
                    publicPath: '../'
                })
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
                            outputPath: 'images/',   // 图片打包后存放的目录
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.(htm|html)$/,
                use: 'html-withimg-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // // 在src目录下创建一个index.html页面当做模板来用
            filename: "index.html",
            hash: true,// 会在打包好的bundle.js后面加上hash串
            chunks: ['index']// 对应js文件
        }),
        // 拆分后会把css文件放到dist目录下的css/style.css
        new ExtractTextWebpackPlugin('css/style.css')
    ],  // 插件配置
    devServer: {   // 开发服务器配置

    },
    mode: "development"   // 模式配置
}
