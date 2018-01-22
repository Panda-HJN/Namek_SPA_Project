# 这是一个没有什么用的项目说明

## 兼容IE是不可就能的，这辈子都不可能兼容IE
不做hack 不做polifill 不加Autoprefixer 只接受Chrome


所有库都用最新版本 react 16 ,webpack 3.10，......   

单页面应用，所有数据都从接口动态的获取   
布局使用 grid + flex





















- `devtool: 'source-map'`, 用来输出sourceMap 生产环境要记得去掉











- `babel-core` 调用Babel的API进行转码
- `babel-loader` webpack 资源载入插件 ？
- `babel-preset-env` 用于解析各版本的js
- `babel-preset-react` 用于解析 JSX