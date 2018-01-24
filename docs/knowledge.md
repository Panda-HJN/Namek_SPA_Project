# 鲁迅曾经说过：查 bug 要注意思维的盲区

```js
test: /\.(js|.jsx)$/ //出错原因：自以为这里没问题，但是多加了个点   眼睛瘸
```
```js
entry: path.join(__dirname, 'src/indxe.js') //出错原因： 眼睛还是瘸
```
    
在新项目结构搭建阶段正好梳理下前端构建相关的知识体系。   
新项目是从零开始的，没有任何历史包袱，并且只关注 Chrome 不做任何兼容。    
目标是搭建出一个使用 React 栈，能使用最新语法以及 JSX 的较为纯净的脚手架。     
并且要搞清楚每一行配置每一个依赖的意义。   
这些配置的细节大致集中在 Babel 和 webpack 上。



## Babel
- Babel 会在正在被转录的文件的当前目录中查找一个 .babelrc 文件。 如果不存在，它会遍历目录树，直到找到一个 .babelrc 文件，或一个 package.json 文件中有 "babel": {} 。
- cross-env 让脚本能跨平台使用
# webpack
---------
### loader
webpack 自身只能理解 js,对于其他文件需要使用loader.
所以说非 js 文件( ts,jsx,css,scss,png,svg...)都需要一个loader.
webpack 通过loader 把这些非js资源转换成自己所能理解的模块.从而去打包整个项目
```js
module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }//test 和 use 是必须的两个属性
    ]
  }
```
这段的含义是告诉webpack当编译时遇到`require()/import`语句中被解析为 `.txt` 的路径时。
先使用  raw-loader  转换一下再打包。

### plugin
```js
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
//...

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),//内置插件 无需额外安装
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
```



-----------------------
    "babel-core": "^6.26.0",// babel 解析核心
    "babel-loader": "^7.1.2",// babel 加载loader
    "babel-preset-env": "^1.6.1",//babel 所有版本的js语法支持
    "babel-preset-react": "^6.24.1",’//react 以及 jsx的语法支持
    "css-loader": "^0.28.9",// css 加载loader
    "http-server": "^0.11.1",//一个简单的本地http 服务
    "node-sass": "^4.7.2", //scss 所需的支持  win中安装 貌似需要 .net 4.5
    "sass-loader": "^6.0.6",// sass 加载loader
    "style-loader": "^0.19.1",// style 加载loader
    "webpack": "^3.10.0",
    "webpack-dev-server": "^2.11.1"
    "uglifyjs-webpack-plugin": "^1.1.6" //混淆压缩用  上线编译的时候用到