const path = require('path')
module.exports = {
    entry: {//入口
        index:'./src/index.js',
        login:'./src/login.js',
    },
    output: { // 出口
        filename: "[name].js",
        path: path.resolve('dist')
    },
    module: {  // 处理对应模块

    },
    plugins: [],  // 插件配置
    devServer: {   // 开发服务器配置

    },
    mode: "development"   // 模式配置
}
