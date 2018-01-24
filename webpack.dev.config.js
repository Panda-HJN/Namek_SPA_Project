// 开发环境配置
const path = require('path');
// 门第
// devServer: {
//     contentBase: path.join(__dirname, './dist')
// }

module.exports = {
    devtool: 'source-map',//开发环境仅供调试使用，生产环境应当去掉 隐藏代码
    /*入口*/
    entry: path.join(__dirname, 'src/index.js'),

    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            },
            {
                test: /\.(js|jsx)$/,
                use: [{
                    loader: "babel-loader" // 将 JS 字符串生成为 style 节点
                }],
                include: path.join(__dirname, 'src')
            }]
    }
};